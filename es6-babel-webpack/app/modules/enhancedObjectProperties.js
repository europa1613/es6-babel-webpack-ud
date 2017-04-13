import { log, logTitle } from './HTMLLogger';

export default function() {
    logTitle('Enhanced Object Properties');

    const brand = 'Bran';
    const calculator = (name, theBrand) => {

        return {
            name,//property value shorthand
            add(n1, n2) { //method definition shorthand
                return n1 + n2;
            },
            [`${brand}d`]: theBrand//computed property keys
        }
    }

    const calc = calculator('Scientific', 'Casio');
    log(calc.name);
    log(calc.add(4, 5));
    log(calc.Brand);
}
