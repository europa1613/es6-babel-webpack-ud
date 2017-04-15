import { log, logTitle } from './HTMLLogger';

const jokesApi = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ES6: Jokes API')
        }, 5250);
    }).then(title => getJokes(title));
}

const getJokes = (title) => {
    logTitle(title);

    const jokesPromise = fetch('http://api.icndb.com/jokes/random/3');
    log('fetch returns promise:' + jokesPromise);
    jokesPromise.then(data => {
        log('then->data:' + data);
        const dataJsonPromise = data.json();
        log('data.json(): ' + dataJsonPromise);
        dataJsonPromise.then(jokes => {
            log('jokes: '+jokes);
            console.log(jokes);
            jokes['value'].forEach(joke => log(`Id: ${joke.id} -> Joke: ${joke.joke}`));
        }).catch(error => {
            log(error);
        })
    }).catch(error => {
        log(error);
    })

}


export default jokesApi;
