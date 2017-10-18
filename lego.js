const Discord = require('discord.js');
const lego = new Discord.Client();

lego.login(process.env.BOT_TOKEN);

lego.on('message', message => {
  if (!message.guild) return;

  if (message.content === '+join') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
