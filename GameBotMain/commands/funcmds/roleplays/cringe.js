const Discord = require('discord.js')

module.exports = {
    info: {
        name: "cringe",
        description: "Cringe at someone",
        usage: "@user",
        aliases: ["cringe"]
    },

    run: async function(client, message, args){   
      
      let member = message.mentions.members.first();
        if(!member) { message.channel.send('Are you cringing at your self?');} else {
            message.channel.send(`${member.user} was cringed at by ${message.author.username}`)
        }
    }
}