const http                             = require('http');
const readline                         = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

async function getWeather ({ query, units = 'm' }) {
    const apiKey  = process.env.WEATHER_API_KEY;
    const baseUrl = process.env.WEATHER_BASE_URL;

    const url = `${baseUrl}/current?access_key=${apiKey}&query=${query}&units=${units}`;

    console.log(url);
    await http
        .get(url, (res) => {
            const { statusCode } = res;
            if (statusCode !== 200) {
                console.log(`statusCode: ${statusCode}`);
                return;
            }

            res.setEncoding('utf8');
            let rowData = '';
            res.on('data', (chunk) => rowData += chunk);
            res.on('end', () => {
                let parseData = JSON.parse(rowData);
                console.log(parseData);
            });
        })
        .on('error', (err) => {
            console.error(err);
        });
}

rl.question(`Узнать погоду в городе: `, (answer) => {

    getWeather({ query: answer })
        .then(() => {
            rl.close();
        });

});