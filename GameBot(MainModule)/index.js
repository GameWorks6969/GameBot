const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hello nightmare! I HATE THIS")
})

app.listen(3000, () => {
  console.log("[API] Loading [CMD] [CMD_PACK] [INFO] [CMD_PACK_MAIN]")
})

const Discord = require('discord.js')
const bot = new Discord.Client();
const fs = require('fs')
const distube = require('distube')
bot.commands = new Discord.Collection();
const xpfile = require('./xp.json');
const { version } = require('package.json');
const os = require('os');
const ms = require('ms');
const { utc } = require('moment');
const { MessageEmbed, version: djsversion } = require('discord.js');
const { Collection} = require("discord.js");
const Pings = new Collection();

const token = 'your_token_here';

bot.on("message", async (message) => {
  if (!message.mentions.members.first()) return;
  if (message.mentions.members.first().id === message.author.id) return;
  const time = 5000;
  Pings.set(`pinger:${message.author.id}`, Date.now() + time);
  setTimeout(() => {
    Pings.delete(`pinger:${message.mentions.members.first().id}`);
  }, time);
});

bot.on("messageDelete", (message) => {
  if (!message.mentions.members.first()) return;
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("GHOST PING DETECTED!")
        .addField("Who pinged", message.author, true)
        .addField("Who got pinged", message.content, true)
        .setColor("RED")
        .setTimestamp()
    );
});
bot.on("message" ,function(message) {
    if(message.author.bot) return;
    var addXP = Math.floor(Math.random() * 10); //when i type addXP it will randomly choose a number between 1-10   [  Math.floor(Math.random() * 10)  ]
// lvl 1 statics
    if(!xpfile[message.author.id]) {
        xpfile[message.author.id] = {
           xp: 0,
           level: 1,
           reqxp: 100
        }
// catch errors
       fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){ 
        if(err) console.log(err)
       })
    }

    xpfile[message.author.id].xp += addXP

    if(xpfile[message.author.id].xp > xpfile[message.author.id].reqxp){
        xpfile[message.author.id].xp -= xpfile[message.author.id].reqxp // it will subtrsct xp whenever u pass a lvl
        xpfile[message.author.id].reqxp *= 2 // XP you need to increase if level 1 is 100 xp so lvl 2 will 200 xp (multiplied by 2 [   .reqxp *= 2  ])
        xpfile[message.author.id].reqxp = Math.floor(xpfile[message.author.id].reqxp) // XP Round
        xpfile[message.author.id].level += 1 // it add 1 level when u level up

// this code will send (" you are now level [your lvl]!") then it will delete it after 10 seconds        
        message.reply("You Are Now Level ***"+xpfile[message.author.id].level+"***!").then( 
            msg=>msg.delete({timeout: "10000"})
        )

    }
// catch errors
    fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){
        if(err) console/log(err)
    })

    //if someone typed in chat =level it will make a embed 
    if(message.content.startsWith("$!level")){
        let user = message.mentions.users.first() || message.author

        let embed = new Discord.MessageEmbed()
        .setTitle("Level Card")
        .setColor("GREEN")
        .addField("Level: ",xpfile[user.id].level)
        .addField("XP: ", xpfile[user.id].xp+"/"+xpfile[user.id].reqxp)
        .addField("XP Required: ",xpfile[user.id].reqxp)
        message.channel.send(embed)
    }



        
})


bot.on('ready', () => {
  console.log(`[CONSOLE] ${bot.user.tag} has now logged in on Discord`)

  fs.readdir('./commands', (err, files) => {
    if (err) return console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() == "js")

    if (jsfile.length == 0) { return console.log("Could not find any commands!") }

    jsfile.forEach(f => {
      let props = require(`./commands/${f}`)
      bot.commands.set(props.help.name, props)
    })
  })
})




bot.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type !== 'text') return;
    let prefix = '$!';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)
    if(!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot,message,args)}

    if(message.content === "$!serverinfo") {
              const embed = new Discord.MessageEmbed()
            .setColor(process.env.COLOR)
            .setTitle(message.guild.name)
            .setThumbnail(message.guild.iconURL())
            .setDescription('Here is some information I found for this server.')
            .addField('Server ID', message.guild.id)
            .addField('Server owner', `${(message.guild.owner.user.username)} *(${message.guild.ownerID})*`)
            .addField("Total members | Humans | Bots", `${message.guild.members.cache.size} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`)
            .addField('Text channels | Voice channels', `${message.guild.channels.cache.filter(channel => channel.type === 'text').size} | ${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}`)
            .addField('Roles', message.guild.roles.cache.size)
            .addField('Created at', message.guild.createdAt);

        return message.channel.send(embed)
    }

    if(message.content === "$!uptime") {
    let embed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('This is the GameBot (average) uptime!')
	.setDescription('Wow that is alot')
	.addFields(

		{ name: 'Wow the total uptime of GameBot is -', value: '2,327 hours', inline: false }
	)
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    message.channel.send(embed)
    }

      if(message.content === "$!help") {
    let embed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('Commands')
	.setDescription('This is the hub for other help commands')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(

		{ name: 'For Images', value: '$!help img', inline: false },
		{ name: 'For beta command', value: '$!help beta', inline: false },
    { name: 'For admin commands', value: '$!help admin 🆕', inline: false },
    { name: 'fun cmds!', value: '$!help-fun  🆕', inline: false },
    { name: 'For info on GameWorks(me!)', value: '$!help-gw 🆕', inline: false },
    { name: 'For GameBotMusic cmds!', value: '$%help', inline: false },
    { name: 'Ecomony commands', value: '$!help eco', inline: false },
    { name: 'For extra links!', value: '$!links', inline: false },
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    message.channel.send(embed)
    }

     if(message.content === "$!help") {
        let embed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('New BIG stuff!!!!')
	.setDescription('Anything new comes here')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(

		{ name: 'GameBot is finally out of its beta!!', value: 'yay', inline: false },
	)
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    message.channel.send(embed)
     }

          if(message.content === "$!help eco") {
    let embed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('Commands')
	.setDescription('This is ecomony commands')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
		{ name: 'Daily coins', value: '$!daily', inline: false },
		{ name: 'Balance', value: '$!bal', inline: false },
		{ name: 'Pay some one', value: '$!pay @user', inline: false },
    { name: 'To buy stuff', value: '$!buy worker [amount]', inline: false },
    { name: 'Work', value: '$!work', inline: false },
    { name: 'Leaderboards', value: '$!lb', inline: false },
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    message.channel.send(embed)
    }

      if(message.content === "$!help img") {
    let embed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('Image commands')
	.setDescription('This is alsmost all of image ')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
		{ name: 'For cute dog', value: '$!dog.img', inline: true },
		{ name: 'For cute cat', value: '$!cat.img', inline: true },
		{ name: 'For cute panda', value: '$!panda.img', inline: true },
    { name: 'For bonk meme', value: '$!bonk.img', inline: true },
    { name: 'For trigger', value: '$!trig.img', inline: true },
    { name: 'Animated bonk meme!', value: '$!bonk.gif', inline: true },
    { name: 'Animated dab', value: '$!dab.gif', inline: true },
    { name: 'Spank dab', value: '$!spank.gif', inline: true },
    { name: 'More images/GIFs', value: 'coming soon!', inline: true }
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    message.channel.send(embed)
    }
  
  if(message.content === "$!help admin") {
    let embed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('Admin commands!')
	.setDescription('These are the admin commands!')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
		{ name: 'Ban', value: '$!ban @user', inline: true },
    { name: 'UnBan', value: '$!unban [user_id]', inline: true },
		{ name: 'Kick', value: '$!kick @user', inline: true },
		{ name: 'Warn', value: '$!warn @user [reason]', inline: true },
    { name: 'Clear', value: '$!clear [number]', inline: true },
    { name: 'Say something!', value: '$!say [channel_name] [text]', inline: true },
    { name: 'Warn', value: '$!warn @user [reason]', inline: true },
    { name: 'Giveaway!', value: '$!giveaway [time[s/m/h]] [max_winners] [price]', inline: true },
    { name: 'DM someone!', value: '$!dm @user [text]', inline: true },
    { name: 'Nick someone!', value: '$!nick @user [nickname]', inline: true },
    { name: 'Report someone (can be used by anyome)', value: '$!report @user [reason]', inline: true },
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');
      message.channel.send(embed)
    }

  if(message.content === "$!help beta") {
    let embed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('Beta commands')
	.setDescription('There are **1** beta commands!')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
  .addFields(
    { name: 'Bot error!', value: '$!bot-err', inline: true },
  )
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    message.channel.send(embed)
    }
  
    if(message.content === "$!bots info") {
    let embed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('Information about GameBots')
	.setDescription('This is a Bunch of informatiom about GameBot!')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
		{ name: 'Main GameBot', value: '[GameBot!](https://discord.com/api/oauth2/authorize?client_id=785573425253974066&permissions=8&scope=bot)', inline: true },
		{ name: 'Beta GameBot', value: '[GameBot TESTER!](https://discord.com/api/oauth2/authorize?client_id=789539114865131520&permissions=8&scope=bot)', inline: true },
		{ name: 'SharkuBot', value: '[SharkuBot!](https://discord.com/api/oauth2/authorize?client_id=793004257036992532&permissions=8&scope=bot)', inline: true },
    { name: 'FriendsBot', value: '[FriendsBot!](https://discord.com/api/oauth2/authorize?client_id=799156029560193024&permissions=2147483639&scope=bot)', inline: true },
    { name: 'For more info', value: '$!info more', inline: true }
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    message.channel.send(embed)
    }

    
  
      if(message.content === "$!info more") {
    let embed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('Information about GameBots')
	.setDescription('This is a Bunch of informatiom about GameBot!')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
		{ name: 'This is a bot made by GameWorks!', value: 'This bot was main made to replace other bot in my server and is "under construction lol"', inline: true },
	)
    message.channel.send(embed)
    }

        if(message.content === "$!dog.img") {
    let image = new Discord.MessageAttachment("https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F09%2F22%2F50-cute-dog-names.jpg", "dog.png")
    message.channel.send(image)
  }

  if(message.content === "$!nuke") {
    message.channel.send('3')
  }

  if(message.content === "$!nuke") {
    message.channel.send('2')
  }

  if(message.content === "$!nuke") {
    message.channel.send('1')
  }

  if(message.content === "$!nuke") {
    message.channel.send('BOOM!')
  }

  if(message.content === "$!nuke") {
    let image = new Discord.MessageAttachment("https://images2.minutemediacdn.com/image/upload/c_crop,h_1345,w_2000,x_0,y_0/v1555949079/shape/mentalfloss/581049-mesut_zengin-istock-1138195821.jpg?itok=DoSFti67", "BOOM.png")
    message.channel.send(image)
  }
  
  if(message.content === "$!cat.img") {
    let image = new Discord.MessageAttachment("https://i.redd.it/02g1pfot5ds41.jpg", "cat.png")
    message.channel.send(image)
  }
    
  if(message.content === "$!rule-gwyt") {
    let image = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/772123191547658290/813590336017268746/Rules.png", "rule.png")
    message.channel.send(image)
  }
  
  if(message.content === "$!bonk.img") {
    let image = new Discord.MessageAttachment("https://i.ytimg.com/vi/oSGtVX58k8w/hqdefault.jpg", "bonk.png")
    message.channel.send(image)
  }


  
    if(message.content === "$!medal.img") {
    let image = new Discord.MessageAttachment("https://i.kym-cdn.com/entries/icons/facebook/000/030/329/cover1.jpg", "medal.png")
    message.channel.send(image)
  }
  
      if(message.content === "$!panda.img") {
    let image = new Discord.MessageAttachment("https://images-na.ssl-images-amazon.com/images/I/41TisfP-lnL._AC_SX466_.jpg", "panda.png")
    message.channel.send(image)
  }
  
        if(message.content === "$!trig.img") {
    let image = new Discord.MessageAttachment("https://raw.githubusercontent.com/Elite-dos-Desenvolvedores/EliteBOT/master/assets/image/triggered.jpg", "trig.png")
    message.channel.send(image)
  }
  if (message.content === '$!links') {
        let embed = new Discord.MessageEmbed()
.setColor('#ff3e3e')
	.setTitle('Links!')
	.setDescription('These are a few links!')
	.setThumbnail('https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128')
	.addFields(
		{ name: 'Vote for us (top.gg)', value: '[Vote (top.gg)](https://top.gg/bot/785573425253974066/vote)', inline: true },
		{ name: 'GameBot website!', value: '[Website!](https://gamebotjs.github.io/index.html)', inline: true },
		{ name: 'GameWorksYT!', value: '[Youtube!](https://www.youtube.com/channel/UCL2f-K1nOq0lKG0nu3OJ6Dw)', inline: true },
    { name: 'Trello page!', value: '[Trello!](https://trello.com/b/VyQmYbE3/gamebot)', inline: true },
    { name: 'Discords server!', value: '[Server!](https://discord.gg/9uGJ8T37jy)', inline: true }
	)
	.setTimestamp()
	.setFooter('This is the end of the embed lol.', 'https://cdn.discordapp.com/avatars/789539114865131520/bf1c4bf38e4b32cae95179057a47ab65.png?size=128');

    message.channel.send(embed)
  }

  if (message.content === 'REJECT HUMANITY RETURN TO MONKE') {
    message.channel.send('REJECT HUMANITY RETURN TO MONKE');
  }

  if (message.content.startsWith(`$!lockdown`)) {
        if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply('You can\'t use this command!')
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[1] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            return message.channel.send('Locked all channels');
        } else if (args[1] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                }).then(() => {
                    channel.setName(channel.name.replace('🔒', ''))
                })
            })
            return message.channel.send('Unlocked all channels')
        }
    }

    if (message.content === 'random') {
        if(!args[0]) return msg.reply("You didn't specify args 1")
        if(!args[1]) return msg.reply("You didn't specify args 2")
        msg.channel.send("Your random number is: " + Math.floor(Math.random() * args[1] + args[0]));
    }

})

bot.on('guildMemberAdd', (member) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Welcome to this server!')
    .setDescription(`Thank you for joining this server! Make sure to stay active and talk to the other members!\n**Current Member Count:** ${member.guild.memberCount}\n**Owner:** ${member.guild.owner.user.tag}`)
    .setColor('#cc3300')
    .setAuthor(member.guild.owner.user.tag, member.guild.owner.user.avatarURL())
    .setFooter(member.guild.name, member.guild.iconURL())
    .setThumbnail(member.user.avatarURL());

    member.send(embed)
})

bot.on('guildMemberAdd', member => {
  let channelID = "818156097852407868";
  if (member.guild.id != '') return;
  let embed = new Discord.MessageEmbed()
  .setTitle('New member joined!')
  .setDescription(`${member.user.tag} has joined the kingdom!`)
  .setColor('ORANGE')
  .setFooter('bot, WELCOME')
  channelID.send(embed)
});


bot.login(token);