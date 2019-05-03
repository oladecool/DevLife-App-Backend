require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//cors middleware
app.use(cors());

//Body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//Load routes
const users = require('./routes/api/users');
const post = require('./routes/api/post');
const profile = require('./routes/api/profile');

app.get("/", (req, res) => res.send("Hello"));

//Connect to mongoose
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));


const port = process.env.PORT || 5000;

//cors

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//passport middleware
app.use(passport.initialize());

//passport configuration
require('./config/passport')(passport);

//use routes
app.use('/api/users', users);
app.use('/api/post', post);
app.use('/api/profile', profile);

app.listen(port, () => console.log(`Server running on port ${port}`));