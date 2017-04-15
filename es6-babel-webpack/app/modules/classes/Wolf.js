import Animal from './Animal';

class Wolf extends Animal {
	constructor(name, sound) {
		super(name);
		this.sound = sound;
	}

	getSound() {
		return `Wolf: ${this.getName()} ${this.sound}`;
	}
}

export default Wolf;