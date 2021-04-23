const discord = require('discord.js')

module.exports = {
    info: {
        name: "ad",
        description: "Advertisment through GameBot!",
        usage: "[advertisment]",
        aliases: ["advertise"]
    },

    run: async function(client, message, args){
    let reason = args.slice(0).join(" ")
    if (!reason) return message.channel.send("What are you advertising?")

    let Channel = message.guild.channels.cache.find((ch) => ch.name === "ads")
    if (!Channel) return message.channel.send("There is no channel called **ads**, please contact a mod or create a channel called `ads`!");

    const embed = new discord.MessageEmbed()
    .setTitle('New ad!')
    .setDescription(`Here is a advertisment by - \`${message.author.tag}\`!`)
    .setColor("RED")
    .addFields(
        { name: "Ad by!", value: `${message.author}`, inline: true},
        { name: "The ad!", value: `${reason}`, inline: true}
    )
    Channel.send(embed)
    message.channel.send('Sent the ad!');
   }
    }