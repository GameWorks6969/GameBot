const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = async (bot,message,args) => {
if (args[0] === undefined) {
        message.channel.send({embed:{
            description:`**Dice** :game_die:\n ${message.author.username} rolled \`\`${(Math.floor(Math.random() * 6) + 1)}\`\`\n dice had \`\`6\`\` sides!\n✧୭.°✧`,
            color:'#fed9f3'
        }}) 
    } else {
        if (!isNaN(Number(args[0])))  {
            var dice_num = (Math.floor(Math.random() * Number(args[0])) + 1)
            message.channel.send({embed:{
                description:`**Dice** :game_die:\n ${message.author.username} rolled \`\`${dice_num}\`\`\n Dice had \`\`${args[0]}\`\` sides!\n✧୭.°✧`,
                color:'#fed9f3'
            }})
        }
    }
  } 

exports.help = {
    name: 'dice'
}
