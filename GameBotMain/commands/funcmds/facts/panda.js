const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    info: {
        name: "panda",
        description: "Sends a random panda fact and a image!",
        usage: "[nothing here]",
        aliases: ["panda"]
    },

    run: async function(client, message, args){
    const url = "https://some-random-api.ml/img/panda";
        const facts = "https://some-random-api.ml/facts/panda"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Panda Image and Fact`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
   }
}