import * as Math from './math';
import { log, logTitle } from '../HTMLLogger';

export default function() {
    logTitle('Multiple Named Exports');
    log(Math.add(3, 4));
    log(Math.subtract(3, 4));
    log(Math.multiply(3, 4));
    log(Math.divide(3, 4));
    log(Math.remainder(3, 4));
    log(Math.pi);
    log(new Math.Person().toString());
}
