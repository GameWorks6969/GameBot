const discord = require('discord.js')

module.exports = {
    info: {
        name: "random",
        description: "Random word!",
        usage: "[nothing lol]",
        aliases: ["random"]
    },

    run: async function(client, message, args){
    let nicknames = ["Random1","RANOM2","RANDOMMMMM3"]
    message.channel.send(`The random word is: ${nicknames[Math.floor(Math.random () * nicknames.length)]}!`)
    }
}