const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports = {
    info: {
        name: "roblox",
        description: "Gets info about a roblox profile!!",
        usage: "[user]",
        aliases: ["Nothing here"]
    },

    run: async function(client, message, args){
      let saybot = args.join('_');
        const url = `https://api.roblox.com/users/get-by-username?username=${saybot}`;
        snekfetch.get(url).then(result => {
              const data = result.body.Id;
              if (saybot.length < 1) return message.channel.send("You need to provide a username to use this command")
              if (result.body.Id === "undefined") return message.channel.send("Could not find a roblox user with the name of " + saybot)
              const url2 = `https://api.roblox.com/ownership/hasasset?userId=${data}&assetId=102611803`;
              snekfetch.get(url2).then(a => {
                const Verifiedcheck = a.body
                  const embed = new Discord.MessageEmbed()
                  .setColor(0x00A2E8)
                  .setTitle("Name: " + saybot)
                  .setDescription("ID: " + data)
                  .addField("Verification", Verifiedcheck)
                  .setFooter("Profile link: " + `https://web.roblox.com/users/${data}/profile`)
                  .setThumbnail("https://roblox.com/Thumbs/BCOverlay.ashx?username=" + saybot)
                  .setImage("http://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&username=" + saybot);
                  message.channel.send({embed}).catch(console.error);
                })
            }) 
   }
    }