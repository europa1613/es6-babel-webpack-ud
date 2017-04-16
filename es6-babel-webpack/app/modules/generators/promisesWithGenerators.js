import { log, logTitle } from '../HTMLLogger';
import { coroutine as co } from 'bluebird';

export default () => {
    logTitle('ES6 Promises with Generators');

    const getRandomNumberPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            log(randomNumber);
            resolve(randomNumber);
        }, 2000);
    });

    /*const getJokesPromise = (n) => {
        const jokesPromise = fetch(`http://api.icndb.com/jokes/random/${n}`);
        return jokesPromise;
    }*/

    //same thing as above, condensed
    const getJokesPromise = n => fetch(`http://api.icndb.com/jokes/random/${n}`);
/*
    getRandomNumberPromise.then(number => {
        getJokesPromise(number).then(jokesResponse => {
            jokesResponse.json().then(jokes => {
                //log(JSON.stringify(jokes));
                const { value } = jokes;
                value.forEach((joke) => log(joke.joke));
            });
        });
    });*/


    /* *****************************************************
     * Same code with Generators using bluebird's coroutine
     * *****************************************************
     */

    co(function*() {
        const number = yield getRandomNumberPromise;
        const jokesResponse = yield getJokesPromise(number);
        const jokesJson = yield jokesResponse.json();
        const { value: jokes } = jokesJson;
        jokes.forEach((joke) => log('==>' + joke.joke));
    })();

}
