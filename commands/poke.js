const Discord = require('discord.js');
const fs = require('fs');
function randomgif() {
    var rand = ["https://media1.tenor.com/images/e8b25e7d069c203ea7f01989f2a0af59/tenor.gif?itemid=12011027",
    "https://media1.tenor.com/images/3b9cffb5b30236f678fdccf442006a43/tenor.gif?itemid=7739077",
    "https://media1.tenor.com/images/1236e0d70c6ee3ea91d414bcaf9f3aa4/tenor.gif?itemid=5015314",
    "https://media1.tenor.com/images/175cc4686c4c67809f48eef44965c845/tenor.gif?itemid=10217135",
    "https://media1.tenor.com/images/175cc4686c4c67809f48eef44965c845/tenor.gif?itemid=10217135",
    "https://media1.tenor.com/images/8fe23ec8e2c5e44964e5c11983ff6f41/tenor.gif?itemid=5600215",
    "https://media1.tenor.com/images/90f68d48795c51222c60afc7239c930c/tenor.gif?itemid=8701034",
    "https://media1.tenor.com/images/ab936c887562756472f83850426bf6ef/tenor.gif?itemid=11956062",
    "https://media1.tenor.com/images/1ae62716935f12e0cf26ada43fcb1916/tenor.gif?itemid=13190374",
    "https://media1.tenor.com/images/1e0ea8b241a7db2b9c03775133138733/tenor.gif?itemid=10064326",
    "https://media1.tenor.com/images/01b264dc057eff2d0ee6869e9ed514c1/tenor.gif?itemid=14346763",
    "https://media1.tenor.com/images/76e377271bf00ba61d954b2752713596/tenor.gif?itemid=5075308",
    "https://media1.tenor.com/images/702fd09287bbf8a907de7d1961d950e3/tenor.gif?itemid=11710639",
    "https://media1.tenor.com/images/1a64ac660387543c5b779ba1d7da2c9e/tenor.gif?itemid=12396068",
    "https://media1.tenor.com/images/514efe749cb611eb382713596e3427d8/tenor.gif?itemid=13054528",
    "https://media1.tenor.com/images/d9b55173939b863da320ddba91e13b91/tenor.gif?itemid=15148498",
    "https://media1.tenor.com/images/2b55eb1befce3e843dec7e8feebf274b/tenor.gif?itemid=10168199"]

    return rand[Math.floor(Math.random()*rand.length)];
}
exports.run = async (bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .addField('Poke', `${message.author} ✧ ${message}`)
    .setImage(randomgif())
    .setFooter('(￢‿￢ )')
    .setColor('#fed9f3')
    message.channel.send(embed)
}

exports.help = {
    name: "poke"
}