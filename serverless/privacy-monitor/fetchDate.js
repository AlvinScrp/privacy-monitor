//https://github.com/puppeteer/puppeteer/blob/v2.1.1/docs/api.md
//   "type": "module",
// import puppeteer from 'puppeteer'
// import { chatRobot } from './chat.js'

const puppeteer = require('puppeteer')
const chatRobot = require('./chat.js')
const evals = require('./config.js')

async function fetchDate(evalConfigs = evals) {
    let results = ''
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        dumpio: false,
    });
    const page = await browser.newPage();
    for (let i = 0; i < evalConfigs.length; i++) {
        const { name, label, url, dateSelector: selector, dateResolve: resolve } = evalConfigs[i]
        await page.goto(url);
        // await page.waitFor(1000);
        await page.waitForSelector(selector)
        let res = await page.$eval(selector, el => el.innerText);
        if (resolve) res = resolve(res)
        results += `${label}${res}`
        if (i < evalConfigs.length - 1) results += '\n'
    }
    console.log(results)
    await browser.close();
    chatRobot.sendTextMsg(results)
    return results
}
module.exports = fetchDate;