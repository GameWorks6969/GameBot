const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = async (bot,message,args) => {
  message.react('❎')
const embed = new Discord.MessageEmbed()
            .setColor("#8B0000")
            .setTitle('BOT ERROR!')
            .setDescription('This is a **BOT ERROR TEST**')
            .setFooter('Bot, ❎ERROR❎')

            message.channel.send(embed)
}

exports.help = {
    name: 'bot-err'
}