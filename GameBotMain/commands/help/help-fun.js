const discord = require('discord.js')
const pagination = require('discord.js-pagination');

module.exports = {
    info: {
        name: "help-fun",
        description: "Shows the list of fun commands",
        usage: "[nothing]",
        aliases: ["hf"]
    },

    run: async function(client, message, args){   
   const page1 = new discord.MessageEmbed()
    .setColor('#ff3e3e')
	.setTitle('Fun extra commands!')
	.setDescription('These are the fun joke commands!')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
		{ name: 'Greeting', value: '$!hello <user>', inline: true },
		{ name: 'Goodbye', value: '$!bye <user>', inline: true },
		{ name: 'Avatar', value: '$!avatar', inline: true },
    { name: 'Cat jamming to music', value: '$!catjam', inline: true },
		{ name: 'CARROT', value: '$!carrot', inline: true },
		{ name: 'Dice', value: '$!dice [number]', inline: true },
    { name: 'KILL', value: '$!kill [user]', inline: true },
    { name: 'Member info', value: '$!memberinfo [user]', inline: true },
    { name: 'Server info', value: '$!serverinfo', inline: true },
    { name: 'To check you level!', value: '$!level', inline: true },
    { name: 'To cheat in your math homeworks', value: '$!calc [number] +/-/* [number]', inline: false },
    { name: 'IMPORTANT!', value: '-------------------', inline: false },
    { name: 'Covid Canada', value: '$!covid canada', inline: false },
    { name: 'Covid Global', value: '$!covid all', inline: false },
    { name: 'Weather!', value: '$!weather [location]', inline: false },
    { name: 'Sorry if the command is a bit slow!', value: 'Hope you understand!', inline: false },
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

   const page2 = new discord.MessageEmbed()
    .setColor('#ff3e3e')
	.setTitle('Roleplay commands!')
	.setDescription('These are the rolplay commands!')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
    { name: 'Spank', value: '$!spank', inline: true },
     { name: 'Bonk meme!', value: '$!bonk [user]', inline: true },
     { name: 'CRINGE', value: '$!cringe [user]', inline: true },
    { name: 'Dab', value: '$!dab', inline: true },
    { name: 'Cry   :(', value: '$!cry', inline: true },
    { name: 'RUN AWAY!!!', value: '$!run', inline: true },
    { name: 'Wtf...', value: '$!wtf', inline: true },
     { name: 'Blep', value: '$!blep', inline: true },
     { name: 'Love (suggestion)', value: '$!love', inline: true },
    { name: 'Love alot (suggestion)', value: '$!lovealot', inline: true },
    { name: 'ANGRY!!!', value: '$!angry', inline: true },
    { name: 'Smile :)', value: '$!smile', inline: true },
    { name: 'Gaming', value: '$!gaming', inline: true },
     { name: 'Bored', value: '$!bored', inline: true },
     { name: 'Eat (the world)', value: '$!eat', inline: true },
    { name: 'Pat Pat', value: '$!pat', inline: true },
    { name: 'Sleep', value: '$!sleep', inline: true },
    { name: 'Roll', value: '$!roll', inline: true },
    { name: 'Bite', value: '$!bite @user [text]', inline: true },
    { name: 'Facepalm', value: '$!facepalm', inline: true },
    { name: 'Dance!', value: '$!dance', inline: true },
    { name: 'TICKLE', value: '$!tickle', inline: true },
    { name: 'Poke!', value: '$!poke', inline: true },
    { name: 'Cool edit I found', value: '$!cool-edit', inline: true },
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
  
    const page3 = new discord.MessageEmbed()
    .setColor('#ff3e3e')
	.setTitle('Memes commands!')
	.setDescription('These are the memes!')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
		{ name: 'Memes', value: '$!meme', inline: true },
    { name: 'Cursed memes', value: '$!cursed', inline: true },
    { name: 'Anime memes', value: '$!animeme', inline: true },
    { name: 'Popular memes', value: '$!pomeme', inline: true },
    { name: 'Programmer humor', value: '$!prohumor', inline: true },
    { name: 'MeIRL', value: '$!meirl', inline: true },
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

  const page4 = new discord.MessageEmbed()
    .setColor('#ff3e3e')
	.setTitle('Games!')
	.setDescription('I made a game in GameBot (this took me 1 hour send help)')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
		{ name: 'Snake game!', value: '$!hs', inline: true },
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

  const page5 = new discord.MessageEmbed()
    .setColor('#ff3e3e')
	.setTitle('Fact commands')
	.setDescription('This is the fact commands which I just put here')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(

		{ name: 'Cat fact', value: '$!cat', inline: false },
    { name: 'Dog fact', value: '$!dog', inline: false },
    { name: 'Fox fact', value: '$!fox', inline: false },
    { name: 'Panda fact', value: '$!panda', inline: false },
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    const pages = [
        page1,
        page2,
        page3,
        page4,
        page5
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '150000'

    pagination(message, pages, emoji, timeout)
}
}
