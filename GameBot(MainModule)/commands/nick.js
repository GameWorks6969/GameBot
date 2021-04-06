  
const discord = require('discord.js')

exports.run = async (bot,message,args) => {
    let user = message.mentions.users.first()
    if(!user) return message.reply("**Please mention a User to change his nickname!**")

    let nickname = args.slice(1).join(" ") // =nickname (user) (nickname kdjv)
    if(!nickname) return message.reply("**Please specify a nickname!**")

    let member = message.guild.members.cache.get(user.id);
    await member.setNickname(nickname);

    const embed = new discord.MessageEmbed()
    .setTitle("✅ Done!")
    .setDescription(`successfully changed ${user.tag}'s nickname to ${nickname}`)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send(embed)
}

exports.help = {
    name: 'nick'
}