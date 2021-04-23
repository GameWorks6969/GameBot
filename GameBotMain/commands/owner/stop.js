const discord = require('discord.js')

module.exports = {
    info: {
        name: "stop",
        description: "Stops GameBot!",
        usage: "[nothing here]",
        aliases: ["There are no aliases!"]
    },

    run: async function(client, message, args){
if (message.author.id !== '722641444397121596') {
            return message.channel.send(`You cannot use this command! Only GameWorksYT! can use this!`)
        }
        await message.channel.send(`Stopping bot... \n Stopped the bot!`)
        process.exit();
   }
}