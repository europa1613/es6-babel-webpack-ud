import { log, logTitle } from './HTMLLogger';

export default function() {
    logTitle('=> Arrow Functions');

    const name = 'Thor';
    const greet = name => `Hello ${name}!`;
    log(greet(name));

    (message => {
        log(`${new Date()}
     		> ${message}`);
    })('Hello, Where you been?');
}
