const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    info: {
        name: "deepfry",
        description: "DEEPFRY THE HELL OUT OF YOUR PFP",
        usage: "@user",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){   
     	const user = message.mentions.users.first() || message.author

    const avatar = user.displayAvatarURL({ dynamic: false, size:4096})

    fetch(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${avatar}`)
    .then((res) => res.json())
    .then((data) => {
        let send = new Discord.MessageAttachment(data.message, "deepfried.png")
        message.channel.send(send)
    })
    }
}