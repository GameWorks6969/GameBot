const Discord = require('discord.js')
const weather = require('weather-js')

module.exports = {
    info: {
        name: "version",
        description: "Why does this command exist?",
        usage: "",
        aliases: ["version"]
    },

    run: async function(client, message, args){
     let embed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('Version!')
	.setDescription('Version : **1.76**')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
    { name: 'Goal:', value: 'Recover from the corruption!', inline: false },
    { name: 'Progress!', value: '\🟩\🟩\🟩\🟩\🟩\🟩\🟩\🟥\🟥', inline: false },
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    message.channel.send(embed)
   }
}