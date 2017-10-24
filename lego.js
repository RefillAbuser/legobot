 // some shit that makes the bot work
const Discord = require("discord.js");
const lego = new Discord.Client();
const config = require("./config.json");

 // Ready notification
lego.on('ready', () => {
 console.log(`Logged in as ${lego.user.tag}!`);
 
// Shows what the bot is playing
lego.user.setPresence({game: {name: 'prefix: +h', type:0 } });
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
    let modRole = message.guild.roles.find("name", "Member");
    if(message.member.roles.has(modRole.id)) {
    message.author.sendMessage("```ccs message.author.sendMessage```");
    message.reply("Sent!");
    } else {
     message.reply("Need the Member role applyed to your account!");
   }
 }
 
 if (command === "test") {
  embed=discord.Embed(title="test", url='https://cog-creators.github.io/discord-embed-sandbox/', description="test")
  embed.set_author(name="test", url='https://cog-creators.github.io/discord-embed-sandbox/')
  embed.set_footer(text="yrdy")
 }
  
 
});
 // Login Token
lego.login(process.env.BOT_TOKEN);
