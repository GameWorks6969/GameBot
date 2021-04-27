const discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "ban",
        description: "Ban someone through GameBot!",
        usage: "@user",
        aliases: ["There are no aliaases!"]
    },

    run: async function(client, message, args){
    let member = message.mentions.members.first()
        if(message.member.hasPermission("ADMINSTRATOR")) {
    if (!member) message.channel.send("Please mention a user or provide a valid user ID! (or *else*)");
    if (member === message.member) 
      return message.channel.send('You cannot ban yourself lol'); 
    
    await member.ban({ reason: 'BIG oof.' });

    const embed = new MessageEmbed()
      .setTitle('Ban Member!')
      .setDescription(`${member} was successfully banned!`)
      .addField('Moderator', message.member)
      .addField('Member', member)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor('RED');
    message.channel.send(embed);   
}else{
          message.channel.send('You do not have the ***perms chemicals***')
        }
   }
}
