const Discord = require('discord.js')

module.exports = {
    info: {
        name: "eat",
        description: "Eat the entire world!",
        usage: "[nothing here!]",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){   
     	const memeEmbed = new Discord.MessageEmbed()
        .setColor('#ff3e3e')
	.setTitle(`${message.author.username} YOU ATE THE WORLD. NOOOOOOOOO`)
	.setImage('https://media1.tenor.com/images/ec08e4d20e72da853da1cb47135deedf/tenor.gif?itemid=14613998')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
    }
}