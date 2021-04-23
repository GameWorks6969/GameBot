const Discord = require('discord.js')
const weather = require('weather-js')

module.exports = {
    info: {
        name: "weather",
        description: "See weather for a place!",
        usage: "[country]",
        aliases: ["weather"]
    },

    run: async function(client, message, args){
     weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
        if (err) message.channel.send(err);

        var current = result[0].current;
        var location = result[0].location;

        const embed = new Discord.MessageEmbed()
        .setDescription(`\`\`${current.skytext}\`\``)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor('#fed9f3')
        .addField('Timezone', `UTC: +${location.timezone}`, true)
        .addField('Degree type', `${location.degreetype}`, true)
        .addField('Temperature', `${current.temperature}`, true)
        .addField('Feels like', `${current.feelslike}`, true)
        .addField('Winds', `${current.winddisplay}`, true)
        .addField('Humidity', `${current.humidity}%`, true)

        message.channel.send(embed)
    });
   }
}