import React, { Component } from "react";
import { coroutine as co } from 'bluebird';

class JokesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        co(function*() {
            const number = yield this.getRamdomNumber();
            const jokesResponse = yield this.getChuckNorrisJokes(number);
            const jokesJson = yield jokesResponse.json();
            const { value: jokes } = jokesJson;
            this.setState({ jokes: jokes });
        }.bind(this))();
    }

    getRamdomNumber() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * 10) + 1;
                //log(randomNumber);
                resolve(randomNumber);
            }, 2000);
        });
    }

    getChuckNorrisJokes(n) {
        return fetch(`http://api.icndb.com/jokes/random/${n}`);
    }

    render() {
        const { jokes: jokesArray } = this.state;
        const style = {
        	color: 'blue'
        }
        const jokes = jokesArray.map((joke, key) => {
            return <li style= {style} key = { key } > { joke.joke } < /li>
        });

        return ( 
        	< div >
	            < h2 > Jokes { this.state.jokes.length } < /h2> 
	            < ol > { jokes } < /ol> 
            < /div>
        )
    }
}

export default JokesComponent;
