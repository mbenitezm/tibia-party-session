import discord from 'discord.js';
import logger from 'morgan';
import calculate from './lib/calculator';
import share from './lib/share';
import yasir from './lib/yasir';
import rashid from './lib/rashid';
import servers from './lib/servers';

export const discordClient = new discord.Client();

discordClient.on('ready', () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
});

discordClient.on('message', async (msg) => {
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
      const response = await share(msg.content);
      console.log(response);
      msg.reply(response);
    } catch (error) {
      msg.reply("I couldn't understand your request");
    }
  }

  if (msg.content.includes('!admincommand-servers')) {
    try {
      msg.reply(servers(discordClient));
    } catch (error) {
      console.log(error);
      msg.reply("I couldn't understand your request");
    }
  }

  if (msg.content.includes('!isyasironline')) {
    msg.reply(
      "I'm sorry, this is currently not working :(. I'll try to find yasir again soon!"
    );
    // try {
    //   msg.reply('Please wait a few seconds while I search for Yasir.');
    //   const response = await yasir(msg.content);
    //   console.log(response);
    //   msg.reply(response);
    // } catch (error) {
    //   console.log(error);
    //   msg.reply(
    //     "There was an error checking if yasir was online, I'm sorry :("
    //   );
    // }
  }

  if (msg.content.includes('!rashid')) {
    const location = rashid();
    msg.reply(location.city, {
      files: [location.image],
    });
  }

  if (msg.content.includes('!help')) {
    const reply = `Available commands: \n
             !share <level> \n
             !session <data copied to clipboard from party hunt analyzer> \n
             !rashid \n
             *Made by Nevaux on Calmera :D`;
    msg.reply(reply);
  }
});

discordClient.login(process.env.DISCORD_SECRET);
