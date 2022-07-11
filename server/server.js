// import express
const express = require('express');

//create an instance of an express server by making the variable app hold the value of an express server
const app = express();

//tell that server to use or ‘serve’ the contents of the folder that 
//you just created called ‘public’ where it will default to looking for an index.html file 
app.use(express.static('public'));

//tell this file to export that express server instance
module.exports = app;
