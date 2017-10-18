const Discord = require('discord.js');
const lego = new Discord.Client();
const config = require("./config.json");

lego.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

bot.user.setPresence({game: {name: 'a bot that gives no fucks', type:0 } });

// Prefix settings
bot.on('message', message => {
 if(message.author.bot) return;
 if(!message.content.startsWith(config.prefix)) return;

 let command = message.content.split(" ")[0];
 command = command.slice(config.prefix.length);
 let args = message.content.split(" ").slice(1);

lego.on('message', message => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
  
});

lego.login(process.env.BOT_TOKEN);
