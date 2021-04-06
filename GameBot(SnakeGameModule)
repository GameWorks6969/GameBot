const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("haha yes")
})

app.listen(3000, () => {
  console.log("Starting the server.. >>> If it does not start, run : 'npm start'  or  'node .'")
})

const SnakeGame = require('snakecord');
const Discord = require("discord.js");
const client = new Discord.Client();

const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "GREEN",
    timestamp: false,
    gameOverTitle: "Oof you lost"
});

const config = {
    token: "your_token_here",
    prefix: "$!"
}

client.on('ready', () => {
    console.log('Bot/Server is online!');
    client.user.setActivity(`${config.prefix}help`);
});

client.on('message', message => {
	if(!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'test-s') {
		return message.channel.send('The test command (-s) works!');
	} else if(command === 'snake' || command === 'snakegame') {
		return snakeGame.newGame(message);
	} else if(command === 'hs') {
		const embed = new Discord.MessageEmbed()
		    .setTitle("Help Menu For Snake Game")
		    .addFields(
			    { name: '$!test-s', value: "Check the command handler", inline: true },
			    { name: '$!snake', value: "Play the snake game!", inline: true },
			    { name: '$!hs', value: "Show this list!", inline: true }
		    );

        return message.reply(embed);
    }
});

client.login(config.token);
