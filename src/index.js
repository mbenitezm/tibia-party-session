import discord from 'discord.js';
import logger from 'morgan';
import calculate from './lib/calculator';

export const discordClient = new discord.Client();

discordClient.on('ready', () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
});

discordClient.on('message', (msg) => {
  if (msg.content.includes('!waste')) {
    let response = calculate(msg.content);
    msg.reply(response);
  }
});

console.log(process.env.DISCORD_SECRET);

discordClient.login(process.env.DISCORD_SECRET);
