module.exports.run = async (client, message) => {
  let queue = message.client.queue.get(message.guild.id), member = message.guild.members.cache.get(message.author.id);
  if (!queue) return message.channel.send(client.comment(`There is nothing playing.`));
  if (member.voice.channel !== member.guild.me.voice.channel) return message.channel.send(client.comment(`You need to be in the same voice channel as the bot!`));
  queue.loop = !queue.loop;
  return queue.textChannel.send(client.comment(`Loop is now ${queue.loop ? `Enabled` : `Disabled`}`));
}

module.exports.code = {
  title: "loop",
  about: "Loop the queue",
  usage: ["%P% loop"],
}