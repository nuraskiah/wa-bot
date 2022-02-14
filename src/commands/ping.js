module.exports = {
  name: 'ping',
  alias: 'p',
  description: 'P!',
  async execute(msg) {
    await msg.reply('pong');
  },
};
