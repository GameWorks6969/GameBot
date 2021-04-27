const discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "kick",
        description: "Kick someone through GameBot!",
        usage: "@user",
        aliases: ["There are no aliaases!"]
    },

    run: async function(client, message, args){
      let member = message.mentions.members.first()
        if(message.member.hasPermission("ADMINSTRATOR")) {
    if (!member) message.channel.send("Please mention a user or provide a valid user ID! (or *else*)");
    if (member === message.member) 
      return message.channel.send('You cannot kick yourself lol'); 

    let reason = args.slice(1).join(' ');
    if (!reason) reason = '`None`';
    if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';

    await member.kick(reason);

    const embed = new MessageEmbed()
      .setTitle('Kicked Member!')
      .setDescription(`${member} was successfully kicked!`)
      .addField('Moderator', message.member)
      .addField('Member', member)
      .addField('Reason', reason)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor('RED');
    message.channel.send(embed);
        }else{
          message.channel.send('You do not have the ***perms chemicals***')
        }
   }
}
