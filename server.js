const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();

app.use(cors());


app.get('/stats', async (req, res) => {
  try {
    const username = req.query.username;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://r6.tracker.network/");
    await page.waitForTimeout(1000);
    await page.type(".hp-search-form__input", username);
    await page.waitForTimeout(1000);
    await page.click('.hp-search-form__button');
    await page.waitForTimeout(1000);
    await page.waitForSelector('.trn-defstat__value');

    //general
    const winsElement = await page.$('[data-stat="PVPMatchesWon"]');
    const winsValue = await page.evaluate(element => element.textContent.trim(), winsElement);

    const lossesElement = await page.$('[data-stat="PVPMatchesLost"]');
    const lossesValue = await page.evaluate(element => element.textContent.trim(), lossesElement);

    const killsElement = await page.$('[data-stat="PVPKills"]');
    const killsValue = await page.evaluate(element => element.textContent.trim(), killsElement);

    const deathsElement = await page.$('[data-stat="PVPDeaths"]');
    const deathsValue = await page.evaluate(element => element.textContent.trim(), deathsElement);

    const winperElement = await page.$('[data-stat="PVPWLRatio"]');
    const winperValue = await page.evaluate(element => element.textContent.trim(), winperElement);

    const kdElement = await page.$('[data-stat="PVPKDRatio"]');
    const kdValue = await page.evaluate(element => element.textContent.trim(), kdElement);

    const hoursElement = await page.$('[data-stat="PVPTimePlayed"]');
    const hoursValue = await page.evaluate(element => element.textContent.trim(), hoursElement);

    const matchesElement = await page.$('[data-stat="PVPMatchesPlayed"]');
    const matchesValue = await page.evaluate(element => element.textContent.trim(), matchesElement);

    //ranked
    //ranked
    const winsElement2 = await page.$('[data-stat="RankedWins"]');
    const winsValue2 = await page.evaluate(element => element.textContent.trim(), winsElement2);

    const lossesElement2 = await page.$('[data-stat="RankedLosses"]');
    const lossesValue2 = await page.evaluate(element => element.textContent.trim(), lossesElement2);

    const killsElement2 = await page.$('[data-stat="RankedKills"]');
    const killsValue2 = await page.evaluate(element => element.textContent.trim(), killsElement2);

    const deathsElement2 = await page.$('[data-stat="RankedDeaths"]');
    const deathsValue2 = await page.evaluate(element => element.textContent.trim(), deathsElement2);

    const winperElement2 = await page.$('[data-stat="RankedWLRatio"]');
    const winperValue2 = await page.evaluate(element => element.textContent.trim(), winperElement2);

    const kdElement2 = await page.$('[data-stat="RankedKDRatio"]');
    const kdValue2 = await page.evaluate(element => element.textContent.trim(), kdElement2);

    const hoursElement2 = await page.$('[data-stat="RankedTimePlayed"]');
    const hoursValue2 = await page.evaluate(element => element.textContent.trim(), hoursElement2);

    const matchesElement2 = await page.$('[data-stat="RankedMatches"]');
    const matchesValue2 = await page.evaluate(element => element.textContent.trim(), matchesElement2);

    //unranked
    //unranked
    const winsElement3 = await page.$('[data-stat="UnRankedWins"]');
    const winsValue3 = await page.evaluate(element => element.textContent.trim(), winsElement3);

    const lossesElement3 = await page.$('[data-stat="UnRankedlLosses"]');
    const lossesValue3 = await page.evaluate(element => element.textContent.trim(), lossesElement3);

    const killsElement3 = await page.$('[data-stat="UnRankedKills"]');
    const killsValue3 = await page.evaluate(element => element.textContent.trim(), killsElement3);

    const deathsElement3 = await page.$('[data-stat="UnRankedDeaths"]');
    const deathsValue3 = await page.evaluate(element => element.textContent.trim(), deathsElement3);

    const winperElement3 = await page.$('[data-stat="UnRankedWLRatio"]');
    const winperValue3 = await page.evaluate(element => element.textContent.trim(), winperElement3);

    const kdElement3 = await page.$('[data-stat="UnRankedKDRatio"]');
    const kdValue3 = await page.evaluate(element => element.textContent.trim(), kdElement3);

    const hoursElement3 = await page.$('[data-stat="UnRankedTimePlayed"]');
    const hoursValue3 = await page.evaluate(element => element.textContent.trim(), hoursElement3);

    const matchesElement3 = await page.$('[data-stat="UnRankedMatches"]');
    const matchesValue3 = await page.evaluate(element => element.textContent.trim(), matchesElement3);

    const doesExist = await page.$(".r6-alias-history__nickname");

    let nicknames = [];

    if (doesExist) {
      await page.waitForSelector(".r6-alias-history__row");

      nicknames = await page.$$eval(".r6-alias-history__row", elements => elements.map(element => element.textContent.trim()));

    }
    await page.waitForSelector(".r6-quickseason");

    seasonranks = await page.$$eval(".r6-quickseason", elements => elements.map(element => element.textContent.trim()));

    await page.click('button#onetrust-accept-btn-handler');
    await page.waitForTimeout(1000);
    await page.click('li.trn-tabs__item:last-child a');
    await page.waitForSelector('tr.trn-table__row');
  
  
  
    await page.waitForSelector('tr.trn-table__row');
    const rowTexts = await page.$$eval('tr.trn-table__row', rows => {
      return rows.map(row => {
        const tds = Array.from(row.querySelectorAll('td'));
        return tds.map(td => td.textContent.trim());
      });
    });
    




    await browser.close();

    const data = {
      //general
      //general
      wins: winsValue,
      losses: lossesValue,
      kills: killsValue,
      deaths: deathsValue,
      winp: winperValue,
      kd: kdValue,
      hours: hoursValue,
      matches: matchesValue,
      //ranked
      //ranked
      wins2: winsValue2,
      losses2: lossesValue2,
      kills2: killsValue2,
      deaths2: deathsValue2,
      winp2: winperValue2,
      kd2: kdValue2,
      hours2: hoursValue2,
      matches2: matchesValue2,
      //unranked
      //unranked
      wins3: winsValue3,
      losses3: lossesValue3,
      kills3: killsValue3,
      deaths3: deathsValue3,
      winp3: winperValue3,
      kd3: kdValue3,
      hours3: hoursValue3,
      matches3: matchesValue3,
      nicknames,
      seasonranks,
      rowTexts
    };

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
