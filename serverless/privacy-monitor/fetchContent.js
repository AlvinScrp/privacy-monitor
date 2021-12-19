//https://github.com/puppeteer/puppeteer/blob/v2.1.1/docs/api.md
//   "type": "module",
// import puppeteer from 'puppeteer'
// import { chatRobot } from './chat.js'

const puppeteer = require('puppeteer')
// const chatRobot = require('./chat.js')
const evals = require('./config.js')

async function fetchContent(evalConfigs = evals) {
    let results = []
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        dumpio: false,
    });
    const page = await browser.newPage();
    for (let i = 0; i < evalConfigs.length; i++) {
        const { label, url, dateSelector, contentSelector: selector } = evalConfigs[i]
        await page.goto(url);
        await page.waitForSelector(dateSelector)
        let content = await page.$eval(selector, el => el.innerText);
        // console.log(content)
        results.push({ label, content })
        // console.log(results.length)
    }
    await browser.close();

    return results
}
module.exports = fetchContent;

//获取更新时间
// (async () => {
//     const result = await fetchContent()
//     console.log('-----------------------')
//     console.log(result)
// })()