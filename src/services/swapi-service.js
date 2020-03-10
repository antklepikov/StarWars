

export default class SwapiService {
    _apiBase ='https://swapi.co/api/';
    async getResource(url) {
        const result = await fetch(`${this._apiBase}${url}`);

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${result.status}`)
        }
        const body = await result.json();
        return body;
    }

    async getAllPeople() {
        const result = await this.getResource(`people/`);
        return result.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`people/${id}/`);
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const result = await this.getResource(`planets/`);
        return result.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`planets/${id}/`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const result = await this.getResource(`starships/`);
        return result.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const result = await this.getResource(`starships/${id}/`);
        return this._transformStarship()
    }
    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color

        }
    };
}





