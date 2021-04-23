const Discord = require('discord.js')

module.exports = {
    info: {
        name: "bonk",
        description: "bonk someone",
        usage: "@user",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){   
     	let member = message.mentions.members.first();
        if(!member) { message.channel.send('You bonked your self lmao');} else {
            message.channel.send(`${member.user} was BONKED by ${message.author.username}`)
        }
    }
}