import { log, logTitle } from './HTMLLogger';

export default function() {
    logTitle('Spread Operator');

    const vegetables = ['Carrots', 'Spinach', 'Egg Plant'];
    const fruits = ['Oranges', 'Banana', 'Grapes'];

    const food = [...vegetables, ...fruits, 'Bread'];
    log(food);

    const alpha = 'ABCDE';
    const alphaArray = [...alpha];
    log(alphaArray);

    const addNumbers = function(n1, n2, n3) {
        return n1 + n2 + n3;
    }
    const numbers = [4, 5, 6, 99];
    log(addNumbers(...numbers));
}
