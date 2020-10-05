import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import fs from 'fs';
import { parseYasirWorlds } from './parser';

const isYasirOnline = async () => {
  const html = await fetchData(process.env.YASIR_SITE);
  let $ = cheerio.load(html);

  const gameWorlds = await $('.online')
    .contents()
    .map((i, e) => $(e).text())
    .toArray();

  const result = parseYasirWorlds(gameWorlds);
  return formatResult(result);
};

const fetchData = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitFor(1500);
  const html = await page.content();
  return html;
};

const formatResult = (result) => {
  return 'Yasir is online in: \n' + result.join('\n');
};

export default isYasirOnline;
