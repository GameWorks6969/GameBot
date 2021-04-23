const Discord = require('discord.js')

module.exports = {
    info: {
        name: "run",
        description: "I dunno what to put here tbh",
        usage: "[nothing here!]",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){

const memeEmbed = new Discord.MessageEmbed()
        .setColor('#ff3e3e')
	.setTitle(`${message.author.username} ran away!!!`)
	.setImage('https://cdn.discordapp.com/attachments/713917255054000170/713942844657762324/amaeiX65MXw.gif')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
    }}