const Discord = require('discord.js')

module.exports = {
    info: {
        name: "links",
        description: "Shows a bunch of links!",
        usage: "nothing here!",
        aliases: ["links"]
    },

    run: async function(client, message, args){

 const linkembed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('Links!')
	.setDescription('These are a few links!')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
		{ name: 'Vote for us (top.gg)', value: '[Vote (top.gg)](https://top.gg/bot/785573425253974066/vote)', inline: true },
		{ name: 'GameBot website!', value: '[Website!](https://gamebotjs.github.io/index.html)', inline: true },
		{ name: 'GameWorksYT!', value: '[Youtube!](https://www.youtube.com/channel/UCL2f-K1nOq0lKG0nu3OJ6Dw)', inline: true },
    { name: 'Trello page!', value: '[Trello!](https://trello.com/b/VyQmYbE3/gamebot)', inline: true },
    { name: 'Discords server!', value: '[Server!](https://discord.gg/9uGJ8T37jy)', inline: true }
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    message.channel.send(linkembed)
    }
}