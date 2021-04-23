const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    info: {
        name: "hug",
        description: "Hug someone you like!",
        usage: "@user",
        aliases: ["nothing here!"]
    },

    run: async function(client, message, args){   
      const url = 'https://some-random-api.ml/animu/hug';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Soumeone hugged someone for sure!`)
            .setImage(data.link)

        await message.channel.send(embed)
    }}