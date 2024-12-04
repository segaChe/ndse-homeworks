const readline                         = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function randomNumber (min, max) {
    return Math.random() * (max - min) + min;
}

const start       = Math.floor(randomNumber(0, 10001));
const rang        = Math.floor(randomNumber(10, 5001));
const end         = start + rang;
const rightAnswer = Math.floor(randomNumber(start, end));

function checkAnswer (input) {
    if (Number.isNaN(Number(input))) {
        console.log(`Введите число`);
    }
    else if (rightAnswer > Number(input)) {
        console.log(`Больше ${input}`);
    }
    else if (rightAnswer < Number(input)) {
        console.log(`Меньше ${input}`);
    }
    else {
        console.log(`Отгадано число: ${input}`);
        rl.close();
    }
}

rl.question(`Загадано число в диапазоне от ${start} до ${end}\n`, (answer) => {
    checkAnswer(answer);
});

rl.on('line', (answer) => {
    checkAnswer(answer);
});
