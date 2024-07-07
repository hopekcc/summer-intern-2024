function isAuthenticated(req, res, next){
    if(req.session.authenticated){
        next()
    }
    else{
        res.status(401).send("Unauthorized");
    }
}

module.exports = { isAuthenticated };