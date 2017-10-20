 // some shit that makes the bot work
const Discord = require("discord.js");
const lego = new Discord.Client();
const config = require("./config.json");

 // Ready notification
lego.on('ready', () => {
 console.log(`Logged in as ${lego.user.tag}!`);
 
// Shows what the bot is playing
lego.user.setPresence({game: {name: '| prefix: +h | Dead Lego |', type:0 } });
});

// Prefix settings
lego.on('message', message => {
 if(message.author.bot) return;
 if(!message.content.startsWith(config.prefix)) return;

 let command = message.content.split(" ")[0];
 command = command.slice(config.prefix.length);
 let args = message.content.split(" ").slice(1);

 // list of shit
 
 if (command === "h") {
   message.channel.sendMessage("`commands` +h - +say - +info | Adding more to this bot soon! |");
 }
 
 if (command === "say") {
   message.channel.sendMessage(args.join(" "));
 }

 if (command === "info") {
   message.channel.sendMessage("+serverinfo coming soon!");
 }
 
});
 // Login Token
lego.login(process.env.BOT_TOKEN);
