exports.run = async (bot,message,args) => {
        let member = message.mentions.members.first();
        if(!member) { message.channel.send('You bonked your self lmao');} else {
            message.channel.send(`${member.user} was BONKED by ${message.author.username}`)
        }
    }

exports.help = {
    name: 'bonk'
}
