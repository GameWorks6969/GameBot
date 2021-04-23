const Discord = require('discord.js')
const fetch = require('node-fetch')
const { MessageAttachment } = require('discord.js');

module.exports = {
    info: {
        name: "captcha",
        description: "Makes your username and pfp",
        usage: "@user",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){   
       let user = message.mentions.users.first() || message.author;
        let avatar = user.avatarURL({
          format: 'png',
          dynamic: false,
          size: 1024
        })

        message.channel.send('Loading...')
        try {
          const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=captcha&url=${avatar}&username=${user.tag}`));
          const vid = (await res.json()).message;

          const attachment = new MessageAttachment(vid, "captcha.png");
          message.channel.send(attachment);
        } catch (err) {
          console.log(err)
        }
    }
    }