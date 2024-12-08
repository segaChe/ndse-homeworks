const yargs                            = require('yargs/yargs');
const { hideBin }                      = require('yargs/helpers');
const path                             = require('path');
const readline                         = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const saveLogs                         = require('../utils/log.js');
const getRandomNumber                  = require('../utils/getRandomNumber.js');

const dir       = path.join(__dirname, '..', 'logs');
const args      = yargs(hideBin(process.argv));
const filename  = args.argv._[0] ?? 'base.txt';
const file      = path.join(dir, filename);
const resultLog = { startTime: (new Date()).toISOString() };

resultLog.guess = getRandomNumber(1, 2);

const rl = readline.createInterface({ input, output });

function checkAnswer (input) {
    const answer = Number(input);

    if (Number.isNaN(answer) || (answer !== 1 && answer !== 2)) {
        console.log(`Введите 1 или 2`);
        resultLog.status = 'error';
    }
    else if (answer === resultLog.guess) {
        console.log('Победа!');
        resultLog.status = 'success';
        rl.close();
    }
    else {
        console.log('Вы проиграли');
        resultLog.status = 'failure';
        rl.close();
    }

    resultLog.input = answer;
    saveLogs({ dir, file, content: JSON.stringify(resultLog) + '\n' });
}

rl.question(`1 или 2?\n`, (answer) => {
    checkAnswer(answer);
});

rl.on('line', (answer) => {
    checkAnswer(answer);
});
