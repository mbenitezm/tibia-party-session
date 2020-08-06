import express from 'express';
import redis from 'redis';
import path from 'path';
import discord from 'discord.js';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import api from './api';
import { promisify } from 'util';

export const app = express();
export const discordClient = new discord.Client();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', api);

discordClient.on('ready', () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
});

discordClient.on('message', (msg) => {
  if (msg.content.includes('!waste')) {
    console.log(msg.content);
    msg.reply('marco es putito');
  }
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});

discordClient.login(
  'NzQxMDIzNDQ0MTQ1MDEyODcz.Xyxh3A.pKR-5qujTl_NkJ0SS5bIhp6Th70'
);
