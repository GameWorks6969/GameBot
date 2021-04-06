const Discord = require('discord.js');
exports.run = async (bot,message,args) => {
message.delete();
    const embed = new Discord.MessageEmbed()
    .setColor('#fed9f3')
    .setFooter(message.author.username, message.author.displayAvatarURL())
    .setImage('https://media.discordapp.net/attachments/543131278464253952/741742966871425085/catjam.gif')
    message.channel.send(embed);
}

exports.help = {
    name: 'catjam'
}
