const Discord = require('discord.js')

module.exports = {
    info: {
        name: "help-eco",
        description: "Shows the list of economy commands",
        usage: "[nothing]",
        aliases: ["heco"]
    },

    run: async function(client, message, args){ 
      let embed = new Discord.MessageEmbed()
      .setAuthor("Commands of (Main)"+client.user.username, "https://images.discordapp.net/avatars/785573425253974066/6b3cbd0f94e7c42368d9369271acd3a9.png?size=128")
.setColor('#ff3e3e')
	.setDescription('This is ecomony commands')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
		{ name: 'Daily coins', value: '$!daily', inline: false },
		{ name: 'Balance', value: '$!bal', inline: false },
		{ name: 'Pay some one', value: '$!pay @user', inline: false },
    { name: 'To buy stuff', value: '$!buy worker [amount]', inline: false },
    { name: 'Work', value: '$!work', inline: false },
    { name: 'Leaderboards', value: '$!lb', inline: false },
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    message.channel.send(embed)
    }
    }