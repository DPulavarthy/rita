module.exports.run = async (client, message) => {
  let queue = message.client.queue.get(message.guild.id), member = message.guild.members.cache.get(message.author.id);
  if (!queue) return message.channel.send(client.comment(`There is nothing playing.`));
  if (member.voice.channel !== member.guild.me.voice.channel) return message.channel.send(client.comment(`You need to be in the same voice channel as the bot!`));
  queue.songs = [];
  return queue.connection.dispatcher.end();
}

module.exports.code = {
  title: "stop",
  about: "Stops the player",
  usage: ["%P% stop"],
  alias: ["leave"],
}