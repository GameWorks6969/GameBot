const Discord = require('discord.js')

module.exports = {
    info: {
        name: "cry",
        description: "Cry :(",
        usage: "[it is just $!cry]",
        aliases: ["cry"]
    },

    run: async function(client, message, args){   
      message.delete();
      const memeEmbed = new Discord.MessageEmbed()
        .setColor('#ff3e3e')
	.setTitle(`${message.author.username} cryed :(`)
	.setImage('https://cdn.discordapp.com/attachments/713914461362192394/713929917456187492/ZMMBrxhRZlw.gif')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
    }
}