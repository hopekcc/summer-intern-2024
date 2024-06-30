const express = require('express');
const router = express.Router()
const { OAuth2Client } = require('google-auth-library');


router.get("/verify", async (req, res) => {
    const client = new OAuth2Client();
    const token = req.headers.authorization.split(' ')[1];
    
    if(!token){
        res.status(401).send("No ID Token provided");
        return;
    }

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    const payload = ticket.getPayload();

    if(!payload || !payload.email || !payload.email_verified){
        res.status(401).send("Invalid ID Token");
        return;
    }

    // create session & return info
    console.log(payload)

    req.session.authenticated = true;
    req.session.user = {
        sub: payload.sub,
        email: payload.email,
        firstname: payload.given_name,
        lastname: payload.family_name,
        profile_pic: payload.picture
    };

    res.status(200).json(req.session.user);
});

module.exports = router;