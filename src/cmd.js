const fs = require('fs');
const { rslv } = require('./utils/path');

let commands = [];
fs.readdirSync(rslv('commands'))
  .filter((file) => file.endsWith('.js'))
  .forEach((file) => {
    const cmd = require(rslv(`commands/${file}`));
    commands.push({
      name: cmd.name,
      alias: cmd.alias,
      description: cmd.description,
    });
  });

// fs.writeFile(rslv('bin/commands.json'), JSON.stringify(commands), (err) => {
//   if (err) {
//     console.error(err);
//   }
// });

module.exports = commands;
