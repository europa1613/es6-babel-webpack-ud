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
	}

	const valueGenerator = generateValues(); 

	log(JSON.stringify(valueGenerator.next()));
	log(JSON.stringify(valueGenerator.next()));
	log(JSON.stringify(valueGenerator.next()));
	log(JSON.stringify(valueGenerator.next()));
	log(JSON.stringify(valueGenerator.next()));
	log(JSON.stringify(valueGenerator.next()));
	log(JSON.stringify(valueGenerator.next()));
}