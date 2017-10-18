const Discord = require('discord.js');
const lego = new Discord.Client();
const config = require("./config.json");

lego.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Prefix settings
bot.on('message', message => {
 if(message.author.bot) return;
 if(!message.content.startsWith(config.prefix)) return;

 let command = message.content.split(" ")[0];
 command = command.slice(config.prefix.length);
 let args = message.content.split(" ").slice(1);
  
 // list of shit
 if (command === "say") {
   message.channel.sendMessage(args.join(" "));
 }

  
});

lego.login(process.env.BOT_TOKEN);
