import { log, logTitle } from './HTMLLogger';

export default function() {
    logTitle('DeStructuring Assigment');

    //Destructuring arrays
    const numbers = [1, 2, 3, 4, 5];
    const [one, , three, ...restOfNumbers] = numbers;
    log(one);
    //log(two);
    log(three);
    log(restOfNumbers);

    //Destructuring objects
    const response = {
        statusCode: 200,
        data: {
            person: {
                name: 'John',
                address: {
                    city: 'Chicago',
                    country: 'United States'
                }
            }
        }
    };

    const { statusCode } = response;
    log(`statusCode: ${statusCode}`);

    const { statusCode: status, data: { person: { name: john } } } = response;
    log(`status: ${status}`);
    log(`name: ${john}`);


    //parameter passing order
    const saveToDb = (name, callback) => {
        log(name);
        callback();
    }
    saveToDb("Maria", () => log('Save complete!'));

    const saveToDb_id = (name, id, callback) => { //id is introduced in the middle
            log(name);
            callback();
    }
    //saveToDb_id("Maria", () => log('Save complete!'));// this call will break

    const saveToDb_id_2 = ({ name, id, callback }) => {
        log(name);
        callback();
    }
    saveToDb_id_2({ name: "Maria_id_2", callback: () => log('Save complete!') });

}
