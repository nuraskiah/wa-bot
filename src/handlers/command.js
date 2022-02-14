const PREFIX = '!';
const { rslv } = require('../utils/path');

module.exports = async (msg, client) => {
  if (!msg.body.startsWith(PREFIX)) return;

  const args = msg.body.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const cmd = client.commands.find(
    (cmd) => cmd.name == commandName || cmd.alias == commandName
  );

  if (!cmd) {
    return client.sendMessage(msg.from, 'Command tidak ditemukan');
  }

  const command = require(rslv(`commands/${cmd.name}.js`));

  try {
    command.execute(msg, args);
  } catch (error) {
    console.log(error);
    msg.reply('error');
  }
};
