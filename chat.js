const http = require('http');
const axios = require('axios')

async function getChat() {
    // console.log('333')

    const API_KEY = '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';
    const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${API_KEY}`,
    // };

    // const data = {
    //     "prompt": "Hello, ChatGPT!",
    //     "temperature": 0.5,
    //     "max_tokens": 50,
    // };

    // const options = {
    //     hostname: 'api.openai.com',
    //     path: '/v1/engines/davinci-codex/completions',
    //     method: 'POST',
    //     headers: headers,
    // };

    // const req = http.request(options, (res) => {
    //     console.log(`statusCode: ${res.statusCode}`);

    //     res.on('data', (d) => {
    //         console.log('我是date', d)
    //         process.stdout.write(d);
    //     });
    // });
    // req.on('error', (error) => {
    //     console.error(error);
    // });

    // req.write(JSON.stringify(data));
    // console.log('大礼包', JSON.stringify(data))
    // req.end();
    // axios.post(API_URL, {

    // })
    // const axios = require('axios');
    let msg = '我要挂了'

     await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            data: {
                "prompt": "你好",
                "temperature": 0.5,
                "max_tokens": 50
              }
        })
        .then(response => {
            msg = response?.data?.choices[0]?.text
        })
        .catch(error => {
            console.log(error.res);
            msg = '报错了'
        });
        return msg

}
module.exports = {
    getChat,
};