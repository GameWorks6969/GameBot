const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "To show all commands",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
    },

    run: async function(client, message, args){

        let embed = new MessageEmbed()
        .setAuthor("Commands of (Main)"+client.user.username, "https://images.discordapp.net/avatars/785573425253974066/6b3cbd0f94e7c42368d9369271acd3a9.png?size=128")
        .setColor("BLUE")
        .setDescription('The hub for the GameBot commands!')
        .addFields(
		          { name: '`$!help-fun` ~ Displays all the fun commands!', value: '`$!help-eco` ~ Displays all the economy commands!', inline: false },
	                )
        .setFooter(`To get info of each command you can do ${client.config.prefix}help [command]`)

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("YELLOW")
            .setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}