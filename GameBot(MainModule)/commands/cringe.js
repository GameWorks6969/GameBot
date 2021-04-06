exports.run = async (bot,message,args) => {
        let member = message.mentions.members.first();
        if(!member) { message.channel.send('Are you cringing at your self?');} else {
            message.channel.send(`${member.user} was cringed at by ${message.author.username}`)
        }
    }

exports.help = {
    name: 'cringe'
}
