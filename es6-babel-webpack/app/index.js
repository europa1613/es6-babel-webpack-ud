/*import pii from './modules/singleDefaultExports/pi';
import api from './modules/singleDefaultExports/api';
import Person from './modules/singleDefaultExports/Person';

import * as Math from './modules/multipleNamedExports/math';

//selective import
import {add, subtract} from './modules/multipleNamedExports/math';

//use 'as' if results in duplicate declaration
import {Person as MathPerson} from './modules/multipleNamedExports/math';


let name = 'Abbyyyyyy';
console.log(`Name: ${name}`);

//Single Default exports
console.log(`Pii: ${pii}`);
console.log(api(name));
var person = new Person();
console.log(person.toString());

//Multiple Named exports
console.log(Math.add(3,4));
console.log(Math.subtract(3,4));
console.log(Math.multiply(3,4));
console.log(Math.divide(3,4));
console.log(Math.remainder(3,4));
console.log(Math.pi);
console.log(new Math.Person().toString());

console.log(add(11,11));
console.log(subtract(99, 77));


console.log(new MathPerson().toString());*/

import singleDefaultExports from './modules/singleDefaultExports';
import multipleNamedExports from './modules/multipleNamedExports';

import spreadOperator from './modules/spreadOperator';
import arrowFunctions from './modules/arrowFunctions';
import enhancedObjectProperties from './modules/enhancedObjectProperties';
import deStructuringAssigment from './modules/deStructuringAssigment';
import defaultFunctionParameters from './modules/defaultFunctionParameters';
import promises from './modules/promises';
import promiseAll from './modules/promise.all';
import jokeApi from './modules/jokeApi';
import classes from './modules/classes';
import generators from './modules/generators';
import mapsAndSets from './modules/mapsAndSets';
import spreadOnObjects from './modules/beyondES6/spreadOnObjects';
import reactApp from './modules/beyondES6/reactApplication';

/*defaultFunctionParameters();
deStructuringAssigment();
enhancedObjectProperties();
arrowFunctions();
spreadOperator();
multipleNamedExports();
singleDefaultExports();
promises();
promiseAll();
jokeApi();*/

//classes();
//generators();

//mapsAndSets();
//spreadOnObjects();

reactApp();