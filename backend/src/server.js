const express = require('express');
const server = express();
const cors = require('cors');

//settings
server.set('port',process.env.port || process.env.PORT);

//middlewares
server.use(cors());
server.use(express.json());

//routes
server.use('/api/users',require('./routes/users'));
server.use('/api/notes',require('./routes/notes'));

module.exports = server;