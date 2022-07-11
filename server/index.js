//importing the contents of server.js
const server = require('./server');

// set a variable named PORT which will either use the variable that Heroku is expecting or 3000
const PORT = process.env.PORT || 3000;

//tell this server to listen for traffic coming to that PORT
server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));