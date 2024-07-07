// load required modules
const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');

const auth = require('./auth');
const session = require('express-session');
const { isAuthenticated } = require('./utilities/checkAuth');

// config
dotenv.config();
const app = express();
const port = 8000;
const store = session.MemoryStore();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(
    session({
        secret: 'hopekcc',
        name: 'hopekcc-auth-session',
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60 * 24,
            sameSite: 'lax',
            domain: 'localhost',
            path: "/"
        },
        resave: false,
        saveUninitialized: false,
        store: store
    }),
);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// routes
app.use('/auth', auth);     // import auth routes from auth.js

app.get("/", (req, res) => {
    res.send("HopeKCC Auth Test API");
    console.log(req);
});

app.get("/userinfo", isAuthenticated, (req, res) => {
    console.log("profile:");
    console.log(req.session.user);
    res.status(200).json(req.session.user);
})

app.get("/config", (req, res) => {
    res.status(200).json({clientid: process.env.CLIENT_ID});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});