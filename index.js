const fetch = require('./fetch.js')
const evals = require('./serverless/privacy-monitor/config.js')

const taobao = 0, jd = 1, meituan = 2, douyin = 3, aiqiyi = 4;

(async () => {
    // await fetch.fetchDateAndSave(evals)
    // await fetch.fetchContentAndSave(evals)
    // await fetch.fetchDateAndSave([evals[taobao]])
    await fetch.fetchContentAndSave([evals[aiqiyi]])
})()

// await fetch.fetchContent([evals[taobao]])
// await fetch.fetchDate([evals[taobao]])