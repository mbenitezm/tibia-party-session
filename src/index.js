import discord from 'discord.js';
import logger from 'morgan';
import calculate from './lib/calculator';
import share from './lib/share';

export const discordClient = new discord.Client();

discordClient.on('ready', () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
});

discordClient.on('message', (msg) => {
  if (msg.member.user.id === process.env.BOT_ID) {
    return;
  }

  if (msg.content.includes('!session')) {
    try {
      let response = calculate(msg.content);
      console.log(response);
      msg.reply(response);
    } catch (error) {
      msg.reply("I couldn't understand your request");
    }
  }

  if (msg.content.includes('!share')) {
    try {
      const response = share(msg.content);
      console.log(response);
      msg.reply(response);
    } catch (error) {
      msg.reply("I couldn't understand your request");
    }
  }

  if (msg.content.includes('!help')) {
    const reply = `Available commands: \n
             !share <level> \n
             !session <data copied to clipboard from party hunt analyzer>`;
    msg.reply(reply);
  }
});

discordClient.login(process.env.DISCORD_SECRET);
