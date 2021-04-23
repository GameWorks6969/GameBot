const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const xpfile = require('./xp.json')
const Canvas = require('canvas');
const Discord = require('discord.js')
const db = require('quick.db')
const Canvacord = require('canvacord')
require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");
const client = new Client();//Making a discord client client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()
const AutoPoster = require('topgg-autoposter')
const ap = AutoPoster('Your Top.gg Token', client)
let activities = [
  { type: 'WATCHING', status: `the world burn` },
    { type: 'PLAYING', status: 'with new commands!' },
    { type: 'PLAYING', status: 'lego starwars!' },
    { type: 'WATCHING', status: `for $!help` },
    { type: 'WATCHING', status: `youtube` },
    { type: 'PLAYING', status: 'Minecraft' },
], i = 0

ap.on('posted', () => {
  console.log('Posted stuff to top.gg thingy ooga booga')
})

client.on("ready", () => {
  client.user.setActivity('the loading screen', { type: 'WATCHING' })

setInterval(() => {
    const current = activities[i++ % activities.length]
    const { type, status } = current
    client.user.setActivity(status, { type })
}, 15 * 1000)
})

client.on("messageDelete", (message) => {
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

client.on("message", async message => {
    if(message.content.startsWith("$!level-d")){

        let embed = new Discord.MessageEmbed()
        .setAuthor("The leveling this server has been disabled! (Please wait a few seconds for it to save!) Do - $!level-e to enable it!")
        message.channel.send(embed)
    }
    if(message.content.startsWith("$!level-e")){

        let embed = new Discord.MessageEmbed()
        .setAuthor("The leveling this server has been enabled! (Please wait a few seconds for it to save!) Do - $!level-d to disable it!")
        message.channel.send(embed)
    }
if(message.content.startsWith("$!lenny")){
    message.delete();
		message.channel.send('( ͡° ͜ʖ ͡°)');
}
    }),

client.config = {
  prefix: process.env.PREFIX
}

//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});

fs.readdir("./commands/owner", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/owner/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading OwnerCommand: "+commandName)
  });
});

fs.readdir("./commands/beta", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/beta/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading HelpCommand: "+commandName)
  });
});

fs.readdir("./commands/nsfw:(", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/nsfw:(/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading NSFWCommand: "+commandName)
  });
});
//Loading Commands
fs.readdir("./commands/help", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/help/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading HelpCommand: "+commandName)
  });
});

fs.readdir("./commands/moderation", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/moderation/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading ModCommand: "+commandName)
  });
});

fs.readdir("./commands/funcmds", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/funcmds/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading FunCommand: "+commandName)
  });
});

fs.readdir("./commands/funcmds/extras", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/funcmds/extras/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading FunCommand: "+commandName)
  });
});

fs.readdir("./commands/funcmds/facts", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/funcmds/facts/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading FunCommand: "+commandName)
  });
});

fs.readdir("./commands/funcmds/memes", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/funcmds/memes/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading FunCommand: "+commandName)
  });
});

fs.readdir("./commands/funcmds/roleplays", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/funcmds/roleplays/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading FunCommand: "+commandName)
  });
});

client.on('message', async (message) => {
    let wordArray = message.content.split(' ')

    const fs = require('fs');

    let reply_data = fs.readFileSync('./bdwords.txt').toString();
    
    // Take each word in the text file and put them into an array
    let replies = reply_data.split('\n');    

    for (var i = 0; i < replies.length; i++) {
        if (wordArray.includes(replies[i])) {
            message.delete()
            break;
        }
    }
})

//Logging in to discord
client.login(process.env.TOKEN) 