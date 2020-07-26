const express = require('express');
const bodyParser = require('body-parser');

const routes = require("./routes/user/usercreate.routes")


const server = express();

server.use(express.json())
server.use(bodyParser.json());
server.use(routes);

server.listen(3333, () => {
    console.log('Server is runing!')
})