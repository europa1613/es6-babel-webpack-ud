import { log, logTitle } from './HTMLLogger';

export default () => {
    //created this so that title logs after promises is completed
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ES6 Promise.all");
        }, 3750);
    }).then(resp => logTitle(resp));

    const getMobiles = new Promise((resolve, reject) => {
        const mobiles = ['iPhone', 'Nexus', 'Galaxy'];
        setTimeout(() => {
            resolve(mobiles);
        }, 4000);

        setTimeout(() => {
            reject('No mobiles found!');
        }, 3850);
    });

    const getComputers = new Promise((resolve, reject) => {
        const computers = ['MacBook Pro', 'Dell XPS', 'Alienware'];
        setTimeout(() => {
            resolve(computers);
        }, 5000);

        /*setTimeout(() => {
            reject('No data from server!');
        }, 3500);*/
    });

    /*Promise.all([getMobiles, getComputers]).then(data => {
        log(data);
        const [mobs, comps] = data; // Array DeStructuring
        log(mobs);
        log(comps);
    }).catch(error => {
        log(error);
    });*/

    /* **************************************
     * Secondary syntax for catching error 
     * **************************************
     */

    Promise.all([getMobiles, getComputers]).then(data => {
        log(data);
        const [mobs, comps] = data; // Array DeStructuring
        log(mobs);
        log(comps);
    }, error => {
        log(error);
    });

    /* ***********************************************
     * NOTE: Either all need to be fullfilled or none.
     * ***********************************************
     */

}
