import { log, logTitle } from '../HTMLLogger';

export default () => {
    logTitle('ES6 Maps!');

    /*const map = new Map();
    map.set(1, 'Arya');
    map.set(2, 'Ricon');
    map.set(3, 'Bran');
    map.set(4, 'Sansa');
    map.set(5, 'Robb');
    map.set(6, 'John');*/

    /*const map = new Map()
        .set(1, 'Aryaa')
        .set(2, 'Ricon')
        .set(3, 'Bran')
        .set(4, 'Sansa')
        .set(5, 'Robb')
        .set(6, 'John');*/

    const map = new Map([
        [1, 'Aryaaaa'],
        [2, 'Ricon'],
        [3, 'Bran'],
        [4, 'Sansa'],
        [5, 'Robb'],
        [6, 'John']
    ]);


    log(`Size: ${map.size}`);
    log(`map.get(1): ${map.get(1)}`);

    log(`map.delete(6): ${map.delete(6)}`);
    log(`Again map.delete(6): ${map.delete(6)}`);

    log(`Size: ${map.size}`);

    map.set(6, 'John');
    map.set(7, 'Ned');
    map.set(8, 'Catelyn');

    map.forEach((key, value) => log(`forEach: ${key}: ${value}`));

    for (const [key, value] of map) {
        log(`Entry - ${key}:${value}`);
    }

    log(`map.keys(): ${map.keys()}`);

    for (const key of map.keys()) {
        log(`Key ${key}`);
    }

    for (const value of map.values()) {
        log(`Value: ${value}`);
    }
}
