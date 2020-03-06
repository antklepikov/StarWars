

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
        return result.results;
    }

    getPerson(id) {
        return this.getResource(`people/${id}/`);
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
        return result.results;
    }

    getStarship(id) {
        return this.getResource(`starships/${id}/`);
        console.log("jrj");
    }
    _transformPlanet(planet) {
        return {
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
}





