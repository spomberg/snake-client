//Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  //TERMINATES CONNECTION
  if (data === '\u0003') {
    console.log("Connection terminated!");
    process.exit();
  }
  //COMMANDS
  if (data === 'w') {
    connection.write("Move: up");
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'd') {
    connection.write("Move: right");
  }
  //MESSAGES
  if (data === '1') {
    connection.write("Say: Go, Snake!");
  }
  if (data === '2') {
    connection.write("Say: SSSSSSS!");
  }
  if (data === '3') {
    connection.write("Say: Snake! I choose you!");
  }
};

module.exports = setupInput;