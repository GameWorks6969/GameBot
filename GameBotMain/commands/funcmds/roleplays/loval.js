const Discord = require('discord.js')

module.exports = {
    info: {
        name: "loval",
        description: "why did someone suggest this?",
        usage: "[nothing here!]",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){
      const memeEmbed = new Discord.MessageEmbed()
        .setColor('#ff3e3e')
	.setTitle(`${message.author.username} loves someone!`)
	.setImage('https://media1.tenor.com/images/fb1aa76944c156acc494fff37ebdbcfa/tenor.gif?itemid=14521920')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
    }
}