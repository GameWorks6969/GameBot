const Discord = require('discord.js')

module.exports = {
    info: {
        name: "bored",
        description: "I am bored",
        usage: "[nothing here!]",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){   
     	const memeEmbed = new Discord.MessageEmbed()
        .setColor('#ff3e3e')
	.setTitle(`${message.author.username} is bored`)
	.setImage('https://media1.tenor.com/images/46cf8801a50fe43770acaf78ef760c64/tenor.gif?itemid=11627087')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
    }
}