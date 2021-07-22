// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 24 - Express Route Parameters
//-----------
// WHAT THIS APP DOES------
// demos express route params

// require the installed express pkg
const express = require('express');

// create the express app
const app = express();

// route that resp to a static client req for home pg
app.get('/', function (req, res) {
    res.send('This is the home page, baby!');
});

// route that resp to a static client req for contact pg
app.get('/contact', function (req, res) {
    res.send('This is the contact page that you requested!');
});

// route that resp to a dynamic client req for a specific profile ID
app.get('/profile/:id', function (req, res) {
    res.send('You requested the profile with the id of ' + req.params.id + '.');
});

// listen for port 3000
app.listen(3000);

// con.log a test mssg
global.console.log('\n"Hey! The server now listening to Port 3000, Yall!"\n');