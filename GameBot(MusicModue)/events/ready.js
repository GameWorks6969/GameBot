module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Over GameWorkYT!", {
    type: "WATCHING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};