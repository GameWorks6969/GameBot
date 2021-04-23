const Discord = require('discord.js')

module.exports = {
    info: {
        name: "cooledit",
        description: "I found a cool edit lol",
        usage: "[it is just $!cooledit]",
        aliases: ["cooledit"]
    },

    run: async function(client, message, args){   
      message.delete();
   const memeEmbed = new Discord.MessageEmbed()
        .setColor('#ff3e3e')
	.setTitle(`${message.author.username} here is a cool edit I found on tenor`)
	.setImage('https://media.tenor.com/images/45914ff928237a936945e8350c152229/tenor.gif')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
    }
}