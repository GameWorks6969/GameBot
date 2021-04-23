const Discord = require('discord.js')

module.exports = {
    info: {
        name: "catjam",
        description: "Watch a cat jam to music",
        usage: "[nothing it is just $!catjam]",
        aliases: ["catjam"]
    },

    run: async function(client, message, args){   
      message.delete();
    const embed = new Discord.MessageEmbed()
    .setColor('#fed9f3')
    .setFooter(message.author.username, message.author.displayAvatarURL())
    .setImage('https://media.discordapp.net/attachments/543131278464253952/741742966871425085/catjam.gif')
    message.channel.send(embed);
    }
}