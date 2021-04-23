const discord = require('discord.js')

module.exports = {
    info: {
        name: "kick",
        description: "Kick someone through GameBot!",
        usage: "@user",
        aliases: ["There are no aliases!"]
    },

    run: async function(client, message, args){
   if(message.member.hasPermission("ADMINSTRATOR")) {
        let member = message.mentions.members.first()
        if (!member) message.channel.send("Who do I kick?")
        else {
          member.kick().then(mem => {
            message.channel.send(`Kicked ${mem.user.username}! (oof)`)
          })
        }
      }else {
        message.reply("You don't have permisson to kick people lmao")
      } 
   }
}