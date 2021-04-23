const Discord = require('discord.js')
const fs = require('fs');
function randomgif() {
    var rand = [
        "https://media1.tenor.com/images/9d30a11e7978ea3b404d5e48c5966c6b/tenor.gif?itemid=5015289",
    "https://media1.tenor.com/images/76d2ec47ec76fa36b2fce913331ba7e3/tenor.gif?itemid=5533025",
    "https://media1.tenor.com/images/43f438c58296dabd4bd71f282987f44c/tenor.gif?itemid=10157360",
    "https://media1.tenor.com/images/5e29a1db9149211728b22bfd01f88771/tenor.gif?itemid=10336271",
    "https://media1.tenor.com/images/8d224fe698e128391249e3f31814b38d/tenor.gif?itemid=5948162",
    "https://media1.tenor.com/images/fa28ce1841f99cc2a2ce470cc642cede/tenor.gif?itemid=5519674",
    "https://media1.tenor.com/images/b8e234ac4aa6aa64b582895911de2046/tenor.gif?itemid=12411488",
    "https://media1.tenor.com/images/015b8063c7018c2880e88c6014a0ffaf/tenor.gif?itemid=12168336",
    "https://media1.tenor.com/images/be96db9b9acfd04fd2f5d890e2c51781/tenor.gif?itemid=14355381",
    "https://media1.tenor.com/images/375754f9ccdf8ac94146381c06755c09/tenor.gif?itemid=5015299",
    "https://media1.tenor.com/images/a8d8b605d44eb2441d118f2d0bb976bd/tenor.gif?itemid=14865623",
    "https://media1.tenor.com/images/5e7f44432181df2ba18f27b9f078545f/tenor.gif?itemid=5897489"
    ]

    return rand[Math.floor(Math.random()*rand.length)];
}

module.exports = {
    info: {
        name: "facepalm",
        description: "Facepalm at someone",
        usage: "@user",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){   
     	const embed = new Discord.MessageEmbed()
    .addField('Facepalming', `${message.author} Facepalms!`)
    .setImage(randomgif())
    .setFooter('Stupid.')
    message.channel.send(embed)
}
    }