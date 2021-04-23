const discord = require('discord.js')

module.exports = {
    info: {
        name: "ban",
        description: "Ban someone through GameBot!",
        usage: "@user",
        aliases: ["There are no aliases!"]
    },

    run: async function(client, message, args){
   if(message.member.hasPermission("ADMINSTRATOR")) {
        let member = message.mentions.members.first()
        if (!member) message.channel.send("Please mention someone")
        else {
          member.ban().then(mem => {
            message.channel.send(`Banned ${mem.user.username}`)
          })
        }
      }else {
        message.reply("You don't have permisson to ban people")
      } 
   }
}