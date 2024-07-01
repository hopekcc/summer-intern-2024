// load required modules
const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');

const auth = require('./auth');
const session = require('express-session');
// config
dotenv.config();
const app = express();
const port = 3000;
const store = session.MemoryStore();

app.use(cors());
app.use(express.json());
app.use(
    session({
        secret: 'hopekcc',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 1 day
            secure: true,
            sameSite: 'none'
        },
        resave: false,
        saveUninitialized: false,
        store
    })
);

// routes
app.use('/auth', auth);     // import auth routes from auth.js

app.get("/", (req, res) => {
    res.send("HopeKCC Auth Test API");
});

app.get("/config", (req, res) => {
    res.status(200).json({clientid: process.env.CLIENT_ID});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});