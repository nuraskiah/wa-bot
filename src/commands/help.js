const client = require('../client');

module.exports = {
  name: 'help',
  alias: 'h',
  description: 'Show all available commands',
  async execute(msg) {
    const chat = await msg.getChat();

    let text = '*COMMAND LIST*\n\n';

    client.commands.forEach((cmd) => {
      text += `*${cmd.name} (${cmd.alias})*\n${cmd.description}\n\n`;
    });

    await msg.reply(text.trimEnd());
  },
};
