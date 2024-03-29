const net = require('net');

const { IP, PORT } = require('./constants');
//const fs = require("fs");

/**
 * Establishes connection with the game server
 */
const connect = function(data) {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('data', (data) => {
    console.log('connection established');
  });
  conn.write('Name: P.D');
  

  // setInterval(() => {
  //   conn.write('Move: up');
  // }, 200);
  

  conn.on('data', (data) => {
    console.log(data);
    if (data.includes('you ded')){
      process.exit();
    }
    
  });
  
  return conn;
}



// console.log('Connecting ...');
// connect();

module.exports = connect;