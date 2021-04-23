const Discord = require('discord.js')

module.exports = {
    info: {
        name: "rol",
        description: "I dunno what to put here tbh",
        usage: "[nothing here!]",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){

const memeEmbed = new Discord.MessageEmbed()
        .setColor('#ff3e3e')
	.setTitle(`${message.author.username} thought it was time to watch tv!`)
	.setImage('https://media1.tenor.com/images/32dcd7b4803e45746d9ef0aff886b126/tenor.gif?itemid=5418544')
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
        message.channel.send(memeEmbed)
    }}