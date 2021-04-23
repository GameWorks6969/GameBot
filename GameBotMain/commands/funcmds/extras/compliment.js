const discord = require('discord.js')

module.exports = {
    info: {
        name: "compliment",
        description: "Compliment someone through GameBot!",
        usage: "@user [compliment]",
        aliases: ["Nothing here"]
    },

    run: async function(client, message, args){
    let user = message.mentions.users.first()
    if (!user) return message.channel.send('Please mention a user to compliment!')

    let reason = args.slice(1).join(" ")
    if (!reason) return message.channel.send("Please provide a compliment!")

    let Avatar = user.displayAvatarURL();

    const embed = new discord.MessageEmbed()
    .setTitle('Nice!')
    .setDescription(`You were was complimented by someone!`)
    .setColor("RED")
    .setThumbnail(Avatar)
    .addFields(
        { name: "Compliment!", value: `${reason}`, inline: true}
    )
    user.send(embed)
    message.channel.send(`${user} ${reason}!`)
   }
    }