const Discord = require('discord.js')

module.exports = {
    info: {
        name: "blep",
        description: "blep uwu",
        usage: "[nothing here!]",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){
      const memeEmbed = new Discord.MessageEmbed()   
     	.setColor('#ff3e3e')
	.setTitle(`UwU`)
	.setImage('https://media1.tenor.com/images/1fe93596a8a0f84078b936305b319c55/tenor.gif?itemid=6194051')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
    }
}