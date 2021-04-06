const { MessageEmbed } = require('discord.js');

exports.run = async (bot,message,args) => {

        message.guild.fetchBans().then(bans => {
            message.channel.send(`${bans.size} `)
        })

    }

exports.help = {
    name: 'total-bans'
}