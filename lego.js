const Discord = require('discord.js');
const lego = new Discord.Client();

lego.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

bot.user.setPresence({game: {name: 'a bot that gives no fucks', type:0 } });

lego.on('message', message => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

lego.login(process.env.BOT_TOKEN);
