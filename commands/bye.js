exports.run = async (bot,message,args) => {
        let member = message.mentions.members.first();
        if(!member) { message.channel.send('Bye :( Now get stuffed in a empty animatronic suit');} else {
            message.channel.send(`Bye ${member.user} :( Now get stuffed in a empty animatronic suit`)
        }
    }

exports.help = {
    name: 'bye'
}