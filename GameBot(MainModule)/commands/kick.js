exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINSTRATOR")) return channel.reply("You don't have permission to use this command!");
  const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`Who to kick??????`);
        }
}

exports.help = {
    name: 'kick'
}