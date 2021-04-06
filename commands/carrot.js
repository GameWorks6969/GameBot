const Discord = require('discord.js');
exports.run = async (bot,message,args) => {
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setColor('#fed9f3')
    .setFooter(message.author.username, message.author.displayAvatarURL())
    .setImage('https://cdn.discordapp.com/attachments/581531385639206935/740827197132242954/3099b51e40f0f8fd.gif')
    message.channel.send(embed)
}

exports.help = {
    name: 'carrot'
}