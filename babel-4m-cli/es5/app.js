'use strict';

var name = 'Tony';
var lastname = 'Strak';

var calAge = function calAge(year) {
  return new Date().getFullYear() - year;
};

console.log('Hello, ' + name + ' ' + lastname + ', you are ' + calAge(1975) + ' years old!');