const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = async (bot,message,args) => {
  const memeEmbed = new Discord.MessageEmbed()
        .setColor('#ff3e3e')
	.setTitle(`${message.author.username} is happy!`)
	.setImage('https://media1.tenor.com/images/c0730cebc0881f5714a523835abd27f3/tenor.gif?itemid=9219474')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
        }
    

exports.help = {
    name: 'smile'
}
