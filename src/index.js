const client = require('./client');
const commands = require('./cmd');

client.initialize();
client.commands = commands;
