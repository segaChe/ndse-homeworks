const fs          = require('fs');
const path        = require('path');
const yargs       = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const dir      = path.join(__dirname, '..', 'logs');
const args     = yargs(hideBin(process.argv));
const filename = args.argv._[0] ?? 'base.txt';
const file     = path.join(dir, filename);

function analise (inputStr) {
    const logs   = inputStr.trim().split('\n');
    const result = { success: 0, failure: 0, error: 0, count: 0 };

    logs.forEach((line) => {
        const lineObj = JSON.parse(line);
        if (lineObj.status === 'success') {
            result.success += 1;
            result.count += 1;
        }
        else if (lineObj.status === 'failure') {
            result.failure += 1;
            result.count += 1;
        }
        else if (lineObj.status === 'error') {
            result.error += 1;
        }
    });

    result.successPercent = (100 * result.success) / result.count;

    return `Сыграно ${result.count} партий\nКоличество выигранных партий ${result.success}\nКоличество проигранных партий ${result.failure}\nУспех ${result.successPercent}%`;
}


if (fs.existsSync(file)) {
    const readerStream = fs.createReadStream(file);

    let data = '';
    readerStream
        .setEncoding('utf8')
        .on('data', (chank) => {
            data += chank;
        })
        .on('end', () => {
            console.log(analise(data));
        });
}
else {
    console.log('Ни одной игры не сыграно');
}
