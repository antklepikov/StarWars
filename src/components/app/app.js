import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './app.css';
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";

export default class App extends Component{
    state = {
        selectedPerson: null,

    };
    swapiService = new SwapiService();
    render() {

        return (
            <div>
                <Header />
                <RandomPlanet />

                <PeoplePage />

                <div className="row mb2 margin">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected = {this.onPersonSelected}
                            getData = { this.swapiService.getAllPlanets}
                            renderItem = { (item) => (<span>{item.name} <button>!</button> </span>)}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId = {this.state.selectedPerson}/>
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected = {this.onPersonSelected}
                            getData ={ this.swapiService.getAllStarships}
                            renderItem = { (item) => `${item.name} (${item.model})`}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId = {this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }


};
