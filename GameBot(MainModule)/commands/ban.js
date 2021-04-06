exports.run = (bot, message, args) => {
       if(!message.member.hasPermission("ADMINSTRATOR")) return channel.reply("You don't have permission to use this command!");
  const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been baned");
        }else{
            message.channel.send(`Who to ban??????`);
        }
    }
  

  exports.help = {
name: 'ban'
}