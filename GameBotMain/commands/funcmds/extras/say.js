const Discord = require('discord.js')

module.exports = {
    info: {
        name: "say",
        description: "Say through GameBot!",
        usage: "#channel [message]",
        aliases: ["say"]
    },

    run: async function(client, message, args){
    if (message.content.toLowerCase() === '$!say'){ // if the msg is  = to _say
        let filter = m => m.author.id === message.author.id; // filtering the person who send the msg
        let q1 = new Discord.MessageCollector(message.channel, filter, { // it will send q1 in the same channel
            max: 1
        })
        message.channel.send('Where do i send, please mention a channel!'); // it will send this msg just right after he type _say

        q1.on('collect', async (message, col) => { // it will collect the msg 
            let channel = message.mentions.channels.first(); // the channel that we gonna send in is the one choosed

            message.channel.send('what message you want me to send there?') // q1 what is the actual the actual msg
            q1.stop();
            let q2 = new Discord.MessageCollector(message.channel, filter, { // filtering
                max: 1
            })
            q2.on('collect', async (message, col) => { // collecting
                channel.send(message.content); // it will send the msg
                await message.react('😀'); // react with this once the msg is there 
                message.channel.send(`Its working! go to ${channel} to check your message out!!`) // send this
                q2.stop();
            })
        })

   }
    }
}