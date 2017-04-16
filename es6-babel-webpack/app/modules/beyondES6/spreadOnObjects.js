import { log, logTitle } from '../HTMLLogger';

export default () => {
	logTitle('Spread On Objects!');

	const personDetails = {
		firstname: 'John',
		lastname: 'Snow',
		email: 'john.snow@got.com'
	};

	const address = {
		city: 'Winterfell',
		country: 'Westeros'
	}

	const johnSnow = {
		...personDetails,
		...address
	};

	log(JSON.stringify(johnSnow));
}