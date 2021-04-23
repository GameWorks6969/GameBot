const discord = require('discord.js')

module.exports = {
    info: {
        name: "kill",
        description: "Commitē mass murder.",
        usage: "@user",
        aliases: ["kill"]
    },

    run: async function(client, message, args){
    let member = message.mentions.members.first();
        if(!member) { message.channel.send('Who to kill???');} else {
              let nicknames = ["fell out of the world","died","got killed",`was slained by ${message.author.username}`]
    message.channel.send(`${member.user} ${nicknames[Math.floor(Math.random () * nicknames.length)]}.`)
      }
   }
}