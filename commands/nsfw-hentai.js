const Discord = require("discord.js");
const snekfetch = require('snekfetch');

exports.run = async (bot,message,args) => {
const { body } = await snekfetch
            .get('https://nekos.life/api/lewd/neko')
       
        if (!message.channel.nsfw) return message.channel.send("Cannot send NSFW content on an SFW channel.")
        const embed = new Discord.MessageEmbed()
        .setImage(body.neko)
        message.channel.send(embed).catch(console.error);
}

exports.help = {
    name: 'nsfw-hentai'
}