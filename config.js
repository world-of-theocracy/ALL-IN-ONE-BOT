const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '879873984466935848',
  status: {
    rotateDefault: [
      { name: 'Netflix', type: ActivityType.Watching },
      { name: 'GTA VI', type: ActivityType.Playing },
      { name: 'on YouTube', type: ActivityType.Streaming, url: 'https://www.twitch.tv/glaceytt' },
      { name: 'Spotify', type: ActivityType.Listening },
    ],
    songStatus: true
  },
}
