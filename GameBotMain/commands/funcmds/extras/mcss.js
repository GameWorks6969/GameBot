const discord = require('discord.js')
const ping = require('minecraft-server-util')

module.exports = {
    info: {
        name: "mcss",
        description: "Gets a mc server stat!",
        usage: "[server ip] [server port]",
        aliases: ["mcss"]
    },

    run: async function(client, message, args){
            if(!args[1]) return message.channel.send('You must type a minecraft server ip')
            if(!args[2]) return message.channel.send('You must type a minecraft server port')
                const Embed = new RichEmbed()
                .setTitle('Server Status')
                .addField('Server IP', reponse.host)
                .addField('Server Version', reponse.version)
                .addField('Online Players', reponse.onlinePlayers)
                .addField('Max Players', reponse.maxPlayers)
                
                message.channel.send(Embed)
   }
}