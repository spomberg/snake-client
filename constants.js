const IP = 'localhost';
const PORT = 50541;
const commands = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  1: "Say: Go, Snake!",
  2: "Say: SSSSSSS!",
  3: "Say: Snake! I choose you!"
};

module.exports = {
  IP,
  PORT,
  commands
};