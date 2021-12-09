// import request from 'request'
const request = require('request')
const robotUrl = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=6521316b-5536-415a-9b6b-94731505652d'

/**
 * 企业微信机器人
 */
const chatRobot = {

    textsom() {
        console.log('textsom')
    },

    /**
     * 发送文本消息
     * @param msg 文本信息
     * @param chatid 单独通知的群聊id，默认undefined
     * @param options 对应参数，请参考官方文档
     */
    async sendTextMsg(text) {
        const msg = {
            msgtype: "text",
            text: { "content": text }
        };
        return await this.sendHttpRequest(msg);
    },
    /**
     * 向机器人webhook发出请求
     * @param json json信息
     */
    async sendHttpRequest(json) {
        return new Promise(function (resolve, reject) {
            request.post(robotUrl, { json: json },
                function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        if (body.errcode === 0 && body.errmsg === "ok") {
                            console.log("机器人成功发送通知", body);
                            resolve(response);
                        } else {
                            console.error("机器人发送通知失败", body);
                            reject(body);
                        }
                    } else {
                        console.error("调用机器人webhook失败", error);
                        reject(error);
                    }
                }
            );

        });
    }
}

module.exports = chatRobot;