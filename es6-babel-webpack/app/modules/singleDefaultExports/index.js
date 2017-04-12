import pi from './pi';
import api from './api';
import Person from './Person';

import { log, logTitle } from '../HTMLLogger';

export default function() {
	logTitle('Single Default Export');
    log(pi);
    log(api(name));
    const person = new Person();
    log(person.toString());
}
