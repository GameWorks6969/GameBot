const discord = require('discord.js')

exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have permission to do this command!")

    let msg = await message.channel.send("Loading...")

    try {
        message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        })
        msg.edit("Successfully Locked the channel!")
    }catch(e) {
        console.log(e)
    }
}

exports.help = {
    name: 'lock'
}