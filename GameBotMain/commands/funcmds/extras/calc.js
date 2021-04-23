const Discord = require('discord.js')
const math = require('mathjs')

module.exports = {
    info: {
        name: "calc",
        description: "This is how to cheat in a maths exam",
        usage: "[nothing here!]",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){   
     	var question = args.join(' ') // =calc 1 + 1
    if(!question) return message.channel.send('Please provide a maths equation')
    let result;
    try {
        result = math.evaluate(question);
    } catch (e) {
        return message.channel.send('Please provide a valid equation') // =calc blblal so it will send this
    }
    return message.channel.send(`${question} = ${result}`)
    }
}