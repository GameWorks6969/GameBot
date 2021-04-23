const Discord = require('discord.js');
const fs = require('fs');
function randomgif() {
    var rand = ['https://media.tenor.com/images/27301b7d752800eb4550909a513e5554/tenor.gif','https://media1.tenor.com/images/c925511d32350cc04411756d623ebad6/tenor.gif?itemid=13462237', 'https://media.tenor.com/images/c0833b0c801c59f301879a9edbe55cc6/tenor.gif',
    'https://i.pinimg.com/originals/b8/cf/e7/b8cfe7a6bc51e66719f2410eb8450e23.gif', 'https://thumbs.gfycat.com/FittingDizzyHornedviper-small.gif', "https://i.pinimg.com/originals/4b/34/c2/4b34c2fd473942b7fbd25c443b8ed8a2.gif", 'https://media.tenor.com/images/0be4033d4b361127f4990add85864c5e/tenor.gif',
    'https://media2.giphy.com/media/vTqhQldEfAY6c/200.gif', 'https://i.pinimg.com/originals/69/53/22/695322e0b3edc81c6b2e0824962bb617.gif', 'https://waifu.clan.su/_ld/4/95331733.gif', 'https://cdn.lowgif.com/small/0e7bb3437e9b4f2a-are-na-anime-dance-gif-7-gif.gif',
    'https://i.gifer.com/7BN.gif', 'https://i.gifer.com/Afdv.gif']

    return rand[Math.floor(Math.random()*rand.length)];
}

    module.exports = {
    info: {
        name: "dance",
        description: "eyyy you like dancin!",
        usage: "[nothing here]",
        aliases: ["dance"]
    },

    run: async function(client, message, args){
      const embed = new Discord.MessageEmbed()
    .addField('Dancing', `${message.author} is dancing!`)
    .setImage(randomgif())
    .setFooter('(￣▽￣)/♫•*¨*•.¸¸♪')
    .setColor('#fed9f3')
    message.channel.send(embed);
    }
    }