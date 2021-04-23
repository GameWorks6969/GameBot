const Discord = require('discord.js')

module.exports = {
    info: {
        name: "pat",
        description: "why did someone suggest this?",
        usage: "[nothing here!]",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){
  const memeEmbed = new Discord.MessageEmbed()
        .setColor('#ff3e3e')
	.setTitle(`${message.author.username} patted someone`)
	.setImage('https://media1.tenor.com/images/cb30351bd9094d05fac1b9f0933e4b44/tenor.gif?itemid=8246906')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
    }
}