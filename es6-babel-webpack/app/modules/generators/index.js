import { log, logTitle } from '../HTMLLogger';

export default () => {
	logTitle('ES6 Generators');

	const generateValues = function* () {
		yield 1;
		yield 2;
		yield true;
		yield null;
		yield {
			name: 'John Snow'
		};

		return {
			abc: ' Generator done!'
		}
	}

	const valueGenerator = generateValues(); 

	log(JSON.stringify(valueGenerator.next().value));
	log(JSON.stringify(valueGenerator.next().value));
	log(JSON.stringify(valueGenerator.next().value));
	log(JSON.stringify(valueGenerator.next().value));
	log(JSON.stringify(valueGenerator.next().value));
	log(JSON.stringify(valueGenerator.next().value));
}