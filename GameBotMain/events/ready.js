module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers!`);
};