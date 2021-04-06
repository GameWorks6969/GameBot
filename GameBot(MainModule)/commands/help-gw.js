const discord = require('discord.js')
const pagination = require('discord.js-pagination');

exports.run = async (bot,message,args) => {
    const page1 = new discord.MessageEmbed()
    .setTitle('Page 1')
    .setDescription('This bot is being developed and as so is in beta! To check which version the bot is on do - **$!version**')

    const page2 = new discord.MessageEmbed()
    .setTitle('page 2')
    .setDescription('I make a youtube videos and make games bot and more!')

    const page3 = new discord.MessageEmbed()
    .setTitle('Page 3')
    .setDescription('GameBot is a moderation bot, fun cmds,Basic economy, music, and more!\n You can use GameBot and add it to a ton of server! pls grow so **this bot** can verified!')


    const pages = [
        page1,
        page2,
        page3
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '150000'

    pagination(message, pages, emoji, timeout)
}

exports.help = {
    name: 'help-gw'
}