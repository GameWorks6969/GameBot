const fetch = require("node-fetch")
const Discord = require("discord.js")
const link = 'https://www.reddit.com/r/popular.json?sort=top&t=week'

module.exports = {
    info: {
        name: "meirl",
        description: "Display a meme from r/meirl!",
        usage: "[nothing]",
        aliases: ["meirl"]
    },

    run: async function(client, message, args){
       let fetchMemes = await fetch(link).then(m => m.json())
    const getMemes = fetchMemes.data.children;
    let randomMeme = getMemes[Math.floor(Math.random() * getMemes.length)]
    let memeEmbed = new Discord.MessageEmbed()
    .setTitle(randomMeme.data.title)
    .setImage(randomMeme.data.url)
    .setColor("#ff0000");

    message.channel.send(memeEmbed)
    }}