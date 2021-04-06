const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = async (bot,message,args) => {
       let embed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('Version!')
	.setDescription('Version : **0.34**')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
		{ name: 'Progress!', value: '\🟩\🟩\🟥\🟥', inline: false },
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    message.channel.send(embed)
}
exports.help = {
    name: 'version'
}   
