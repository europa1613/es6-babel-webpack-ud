import { log, logTitle } from '../HTMLLogger';

export default () => {
    logTitle('ES6 Generators');

    const generateValues = function* () {
        yield 1;
        yield 2;
        yield true;
        yield null;
        yield {
            name: 'John Snow'
        };

        return {
            abc: ' Generator done!'
        }
    }

    const valueGenerator = generateValues();

    log(JSON.stringify(valueGenerator.next().value));
    log(JSON.stringify(valueGenerator.next().value));
    log(JSON.stringify(valueGenerator.next().value));
    log(JSON.stringify(valueGenerator.next().value));
    log(JSON.stringify(valueGenerator.next().value));
    log(JSON.stringify(valueGenerator.next().value));


    const loopNumbers = function* (numbers) {
        for (let i = 0; i < numbers.length; i++) {
            yield numbers[i];
        }
    };

    const loopNumbersGen = loopNumbers([12, 22, 33, 44]);

    const interval = setInterval(() => {
        const next = loopNumbersGen.next();
        if (next.done) {
            log('Loop Numbers done!');
            clearInterval(interval);
        } else {
            log(next.value);
        }
    }, 1000);
}
