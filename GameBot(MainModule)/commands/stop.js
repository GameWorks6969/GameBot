exports.run = async (bot,message,args) => {
if (message.author.id !== '722641444397121596') {
            return message.channel.send(`You cannot use this command! Only GameWorksYT! can use this!`)
        }
        await message.channel.send(`Stopping bot...`)
        process.exit();
}

exports.help = {
    name: `stop`
};