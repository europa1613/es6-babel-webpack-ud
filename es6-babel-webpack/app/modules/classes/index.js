import { log, logTitle } from '../HTMLLogger';
import Person from './Person';
import Wolf from './Wolf';

export default () => {
    logTitle('ES6 Class');

    log(Person.getUpperCaseName('Khaleesi'));

    const aPerson = new Person('Arya', 12);
    log(aPerson.toString());
    log(aPerson.getName());
    log(aPerson.getAge());

    log((new Wolf('Ghost', 'Howls')).getSound());

}
