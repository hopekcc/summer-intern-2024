// load required modules
const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');

// config
dotenv.config();
const app = express();
const port = 8000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

// API Routes

app.get("/", (req, res) => {
    res.send("HopeKCC Git Test API");
});

// User Webpage API

app.use("/webfetch", require("./routes/webfetch"));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});