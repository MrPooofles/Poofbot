module.exports = (bot, guild) => {
    bot.channels.get("442766709758361601").send(`:frowning: I have left \`${guild.name}\` I am now in \`${bot.guilds.size}\` servers!`);
    bot.user.setActivity(`with ${bot.guilds.size} emeralds | e.help`);
    bot.db.collection("configs").deleteOne({ _id: guild.id });
};
