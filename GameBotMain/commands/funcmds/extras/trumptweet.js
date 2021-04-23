const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    info: {
        name: "trumptweet",
        description: "Tweet as trump! (kinda)",
        usage: "[nothing here!]",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){   
      let reason = args.slice(0).join(" ")
    if (!reason) return message.channel.send("please provide a reason!")
    
     	fetch(`https://nekobot.xyz/api/imagegen?type=TrumpTweet&text=${avatar}`)
    .then((res) => res.json())
    .then((data) => {
        let send = new Discord.MessageAttachment(data.message, "deepfried.png")
        message.channel.send(send)
    })
    }}