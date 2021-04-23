const Discord = require('discord.js')

module.exports = {
    info: {
        name: "angry",
        description: "Show that you are angry (also be calm!)",
        usage: "[it is just $!angry]",
        aliases: ["angy"]
    },

    run: async function(client, message, args){   
      message.delete();
   const memeEmbed = new Discord.MessageEmbed()
        .setColor('#ff3e3e')
	.setTitle(`${message.author.username} IS ANGRY!!!!!`)
	.setImage('https://media1.tenor.com/images/5dec3ebbf300096537002420bb95a5cf/tenor.gif?itemid=8593280')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
    }
}