const evals = [
    {
        name: 'taobao', label: '淘宝',
        url: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201703241622_61002.html',
        dateSelector: 'p:nth-of-type(3)',
        contentSelector: 'body'
    }, {
        name: 'jd', label: '京东',
        url: 'https://about.jd.com/privacy',
        dateSelector: 'h6:nth-of-type(1) strong',
        contentSelector: '#privacybox'
    }, {
        name: 'meituan', label: '美团',
        url: 'https://rules-center.meituan.com/rules-detail/2',
        dateSelector: '#app > div > div > div > div.content-container > div > div.detail.ProseMirror > p:nth-child(48) > strong > span',
        contentSelector: '#app > div > div > div > div.content-container > div'
    }, {
        name: 'douyin', label: '抖音',
        url: 'https://www.douyin.com/agreements/?id=6773901168964798477',
        dateSelector: 'body > div > section > div > div > p:nth-child(1) > strong',
        contentSelector: 'body > div > section > div > div'
    }, {
        name: 'aiqiyi', label: '爱奇艺',
        url: 'https://www.iqiyi.com/common/privateh5.html',
        dateSelector: '#lequ-zoom-elder-model > div.statement > div.time',
        contentSelector: '#lequ-zoom-elder-model > div.statement',
        dateResolve: (value) => {
            const nIndx = value.indexOf('\n')
            if (nIndx > 0) { value = value.substring(0, nIndx) }
            return value
        }
    }]

module.exports = evals;