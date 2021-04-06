const { utc } = require('moment');
const { MessageEmbed, version: djsversion } = require('discord.js');
const { version } = require('../package.json');
const os = require('os');
const ms = require('ms');


exports.run = async (bot,message,args) => {
		const embed = new MessageEmbed()
.addField(`GameBot's information`)
    .addField()
    .addField('Account created:\n ', `${userCreated[1]}, ${userCreated[2]}d  ${userCreated[3]}y, ${userCreated[4]}`)
    .setTimestamp(message.createdAt)
    .setColor('#fed9f3')

		message.channel.send(embed);
}

exports.help = {
    name: 'botinfo'
}