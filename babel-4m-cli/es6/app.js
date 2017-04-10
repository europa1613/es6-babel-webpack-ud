let name = 'Tony';
const lastname = 'Strak';

const calAge = (year) => new Date().getFullYear() - year;

console.log(`Hello, ${name} ${lastname}, you are ${calAge(1975)} years old!`);