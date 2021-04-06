exports.run = async (bot,message,args) => {
        let member = message.mentions.members.first();
        if(!member) { message.channel.send('Who to kill???');} else {
            message.channel.send(`${member.user} was slained by ${message.author.username}`)
        }
    }

exports.help = {
    name: 'kill'
}