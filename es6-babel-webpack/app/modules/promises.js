import { log, logTitle } from './HTMLLogger';

export default () => {
    logTitle('ES6 Promises');

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data back from server!');
        }, 3000);//< reject timeout

        setTimeout(() => {
            reject('No data from server!');
        }, 3500);
    });

    promise.then((response) => {
        log(response);
    }).catch((error) => {
    	log(error);
    });

}
