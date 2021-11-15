const { commands } = require('./constants');

//Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  //Command strings (WASD + canned messages) are stored in an object on constants.js
  if (commands[data]) connection.write(commands[data]);
  
  //TERMINATES CONNECTION
  if (data === '\u0003') {
    console.log("Connection terminated!");
    process.exit();
  }
};

module.exports = setupInput;