const axios = require('axios')

/**
 * parse argv 
 */
const opts = process.argv;

if (opts.length != 3) {
    console.log('parameter wrong! 只能输入一个车辆品牌')
    process.exit(1)
}

const request_alias = async () => {
        const request_uri = encodeURI(`http://aolai.souche.com/v1/searchApi/suggestKeyword.json?keyword=${opts[2]}`)
        return res = await axios.get(request_uri)
}

request_alias().then(res => console.log(res.data.data.allSeries)).catch(console.error)
