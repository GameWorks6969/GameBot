const discord = require('discord.js')

module.exports = {
    info: {
        name: "clear",
        description: "nothing here",
        usage: "[number]",
        aliases: ["clear"]
    },

    run: async function(client, message, args){
    let num = parseInt(message.content.replace('$!clear',''));
      message.channel.bulkDelete(num + 1);
      message.channel.send(`I have deleted ${num} messages!`).then(msg => msg.delete({ timeout:100}))
   }
    }