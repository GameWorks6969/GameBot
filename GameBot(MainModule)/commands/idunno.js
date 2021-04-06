const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = async (bot,message,args) => {
  const memeEmbed = new Discord.MessageEmbed()
        .setColor('#ff3e3e')
	.setTitle(`${message.author.username} is confused?`)
	.setImage('https://media1.tenor.com/images/a0aa684149c7e3cacf3bbf2c1c74e0a5/tenor.gif?itemid=10838324')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
        }
    

exports.help = {
    name: 'idunno'
}
