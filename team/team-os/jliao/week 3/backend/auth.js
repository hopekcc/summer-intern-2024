const express = require('express');
const router = express.Router()
const { OAuth2Client } = require('google-auth-library');
const { isAuthenticated } = require( './utilities/checkAuth');

router.post("/verify", async (req, res) => {
    const client = new OAuth2Client();
    const token = req.headers.authorization.split(' ')[1];
    
    if(!token){
        res.status(401).send("No ID Token provided");
        return;
    }

    // unpack JWT from Google
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    const payload = ticket.getPayload();
    
    //verify id token
    if(!payload || !payload.email || !payload.email_verified){
        res.status(401).send("Invalid ID Token");
        return;
    }

    // create session & return info
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

router.get("/checkAuth", isAuthenticated, (req, res) => {
    // check if user is authenticated. isAuthenticated middleware handles response if unauthenticated
    res.status(200).json();
})

router.post('/logout', function (req, res, next) {
    // destroy user session
    res.cookie('hopekcc-auth-session', 'none', {
        httpOnly: true,
        secure: false,
        maxAge: 1000,
        sameSite: 'lax',
        domain: 'localhost',
        path: "/"
    })
    req.session.destroy((err) => {
        if (err) {
            console.log(`Logout Error: ${err}`);
            res.status(500).send('Error logging out');
        } else {
            res.status(200).send('Logged out successfully');
        }
    });
  })

module.exports = router;