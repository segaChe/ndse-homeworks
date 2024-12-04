const yargs       = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argsMain = yargs(hideBin(process.argv))
    .option('year', { alias: 'y' })
    .option('month', { alias: 'm' })
    .option('date', { alias: 'd' })
    .command('current', 'Получить текущую дату', (yargs) => {
        const args = yargs.argv;

        yargs
            .option('year', {
                type       : 'boolean',
                description: 'Текущий год',
            })
            .option('month', {
                type       : 'boolean',
                description: 'Текущий месяц',
            })
            .option('date', {
                type       : 'boolean',
                description: 'Текущее число',
            });

        if (args.year) {
            console.log((new Date()).getFullYear());
        }
        else if (args.month) {
            console.log((new Date()).getMonth() + 1);
        }
        else if (args.date) {
            console.log((new Date()).getDate());
        }
        else {
            console.log((new Date()).toISOString());
        }
    })
    .command('add', 'Добавить к текущей дате', (yargs) => {
        const args = yargs.argv;

        yargs
            .option('year', {
                type       : 'number',
                description: 'Добавить количество лет',
            })
            .option('month', {
                type       : 'number',
                description: 'Добавить количество месяцев',
            })
            .option('date', {
                type       : 'number',
                description: 'Добавить количество дней',
            });

        const currentDate = new Date();

        if (args.year) {
            currentDate.setFullYear(currentDate.getFullYear() + args.year);
        }
        if (args.month) {
            currentDate.setMonth(currentDate.getMonth() + args.month);
        }
        if (args.date) {
            currentDate.setDate(currentDate.getDate() + args.date);
        }
        console.log(currentDate.toISOString());
    })
    .command('sub', 'Убавить из текущей даты', (yargs) => {
        const args = yargs.argv;

        yargs
            .option('year', {
                type       : 'number',
                description: 'Убавить количество лет',
            })
            .option('month', {
                type       : 'number',
                description: 'Убавить количество месяцев',
            })
            .option('date', {
                type       : 'number',
                description: 'Убавить количество дней',
            });

        const currentDate = new Date();

        if (args.year) {
            currentDate.setFullYear(currentDate.getFullYear() - args.year);
        }
        if (args.month) {
            currentDate.setMonth(currentDate.getMonth() - args.month);
        }
        if (args.date) {
            currentDate.setDate(currentDate.getDate() - args.date);
        }
        console.log(currentDate.toISOString());
    })
    .argv;
