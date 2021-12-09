## 功能：
* 1、puppeteer2.1.1+nodejs12.16 爬虫获取部分大厂APP隐私政策的更新时间和内容
    > puppeteer2.1.1（腾讯云函数内置版本）使用：https://github.com/puppeteer/puppeteer/blob/v2.1.1/docs/api.md

* 2、部署到腾讯云函数服务，用于企业微信hook
    > 函数服务参考 https://cloud.tencent.com/document/product/1154/50938


## 入口:
### serverless：
   ./serverless/privacy-monitor/index.js

   会发送到企业微信hook
### 本地：
./index.js 

主要使用serverless中的fuction，结果保存到./doc

## 其他：
* 检测链接及puppeteer参数配置： ./serverless/privacy-monitor/config.js
* 企业微信hook：./serverless/privacy-monitor/chat.js

