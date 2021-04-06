const discord = require('discord.js')
const db = require('quick.db')


exports.run = async (bot,message,args) => {
    const content = args.join(" ")
    await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
    message.channel.send(`you are now afk.\nReason: ${content}`)
    
}

exports.help = {
    name: `afk`
};