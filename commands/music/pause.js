module.exports.run = async (client, message) => {
  let queue = message.client.queue.get(message.guild.id), member = message.guild.members.cache.get(message.author.id);
  if (!queue) return message.channel.send(client.comment(`There is nothing playing.`));
  if (member.voice.channel !== member.guild.me.voice.channel) return message.channel.send(client.comment(`You need to be in the same voice channel as the bot!`));
  switch (queue.playing) {
    case true: {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      queue.textChannel.send(client.comment(`Paused the music.`));
      break;
    }
    default: { queue.textChannel.send(client.comment(`Paused the music.`)); break; }
  }
}

module.exports.code = {
  title: "pause",
  about: "Pauses the track",
  usage: ["%P% pause"],
}