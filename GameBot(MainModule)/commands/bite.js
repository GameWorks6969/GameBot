const Discord = require('discord.js');
const fs = require('fs');
function randomgif() {
    var rand = ['https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif?itemid=8259627', "https://avatars.mds.yandex.net/get-zen_doc/1654945/pub_5cf5ce55babd4000b0927a4d_5cfb26027839c500ae766b35/orig",'https://i.pinimg.com/originals/17/9a/16/179a16220f6cf2712073ccdc759ff3e1.gif',
'https://data.whicdn.com/images/280828748/original.gif', 'https://media1.tenor.com/images/b308e5535251c436fbfaf424fa7a4b75/tenor.gif?itemid=13859648', 'https://thumbs.gfycat.com/UniqueThickGalapagosalbatross-small.gif', 'https://i.pinimg.com/originals/e8/07/d6/e807d6f497a2b5fa8c8e0fe573364147.gif',
'https://thumbs.gfycat.com/DefiniteBossyFlounder-size_restricted.gif', 'https://i.gifer.com/L1lz.gif', 'https://giffiles.alphacoders.com/170/170905.gif', 'https://i.imgur.com/xKJw3mX.gif', 'https://thumbs.gfycat.com/GregariousQuarrelsomeAlleycat-size_restricted.gif']

    return rand[Math.floor(Math.random()*rand.length)];
}

exports.run = async (bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .addField('Bite', `${message.author} ✧ | ${message}`)
    .setImage(randomgif())
    .setFooter('(〃＞＿＜;〃')
    .setColor('#fed9f3')
    message.channel.send(embed)
}

exports.help = {
name: 'bite'
}