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
    try {
        const request_uri = encodeURI(`http://aolai.souche.com/v1/searchApi/suggestKeyword.json?keyword=${opts[2]}`)
        const res = await axios.get(request_uri)
        if (res.status == 200)
            // console.log(res)
            console.log(res.data.data.allSeries)
    }catch (err) {
        console.error(err)
    }
}

request_alias().then(console.log).catch(console.error)