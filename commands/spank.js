const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = async (bot,message,args) => {
   let member = message.mentions.members.first();
        if(!member) { message.channel.send('Who the hell do I spank huh?');} else {

  const memeEmbed = new Discord.MessageEmbed()
        .setColor('#ff3e3e')
	.setTitle(`${message.author.username} spanked someone`)
	.setImage('https://31.media.tumblr.com/8d9457527e4d925186510708bf752a4b/tumblr_mzgeclJJ9Y1rbnx7io1_500.gif')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
        }

}  

exports.help = {
    name: 'spank'
}
