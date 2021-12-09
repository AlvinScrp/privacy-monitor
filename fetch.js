const evals = require('./serverless/privacy-monitor/config.js')
const fetchDate = require('./serverless/privacy-monitor/fetchDate.js');
const fetchContent = require('./serverless/privacy-monitor/fetchContent.js');
const fs = require('fs'); // 引入fs模块

//获取更新时间
async function fetchDateAndSave(evalConfigs) {
    const result = await fetchDate(evalConfigs)
    console.log('-----------------------')
    console.log(result)
    fs.writeFile(`./doc/date.txt`, result, { 'flag': 'w' }, function (err) {
        if (err) throw err;
        console.log('Hello. save date');
    });
}


async function fetchContentAndSave(evalConfigs) {
    //[{label,content}]
    const results = await fetchContent(evalConfigs)
    console.log('-----------------------', results.length)
    //生成文件
    for (let i = 0; i < results.length; i++) {
        const { label, content } = results[i];
        console.log(content)
        fs.writeFile(`./doc/${label}.txt`, content, { 'flag': 'w' }, function (err) {
            if (err) throw err;
            console.log('Hello. save content');
        });
    }
}
module.exports.fetchDateAndSave = fetchDateAndSave
module.exports.fetchContentAndSave = fetchContentAndSave