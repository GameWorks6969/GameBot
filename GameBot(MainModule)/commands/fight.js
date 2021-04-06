exports.run = async (bot,message,args) => {
  let member = message.mentions.members.first();
  if(!member) { message.channel.send('Who to fight also pls dont fight pls bro');} else {
    let nicknames = [`${message.author.username} WON!`,`${message.author.username} LOST...`]
    message.channel.send(`${nicknames[Math.floor(Math.random () * nicknames.length)]}`)
  }
}

exports.help = {
  name: 'fight'
}