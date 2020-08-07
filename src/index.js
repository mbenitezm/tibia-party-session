import discord from 'discord.js';
import logger from 'morgan';
import calculate from './lib/calculator';

export const discordClient = new discord.Client();

discordClient.on('ready', () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
});

discordClient.on('message', (msg) => {
  if (msg.content.includes('!session')) {
    try {
      let response = calculate(msg.content);
      console.log(response);
      msg.reply(response);
    } catch (error) {
      msg.reply("I couldn't understand your request");
    }
  }
});

discordClient.login(process.env.DISCORD_SECRET);
