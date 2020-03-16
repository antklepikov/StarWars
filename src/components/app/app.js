import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../item-details/item-details';
import Row from "../row";
import './app.css';
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import ItemDetails, {Record} from "../item-details/item-details";
export default class App extends Component{
    state = {
        selectedPerson: null,
        showRandomPlanet: true
    };
    swapiService = new SwapiService();
    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet /> :
            null;
        const { getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService
        const personDetails = (
            <ItemDetails
                itemId = {11}
                getData = {getPerson}
                getImageUrl = {getPersonImage}>
                    <Record field="gender" label="Gender" />
                    <Record field= "eyeColor" label="Eye Color" />

            </ItemDetails>
        );
        const starhipDetails = (
            <ItemDetails
                itemId = {5}
                getData = {getStarship}
                getImageUrl = {getStarshipImage}>
                    <Record field="model" label="Model" />
                    <Record field= "length" label="Length" />
                    <Record field= "costInCredits" label="Cost" />
            </ItemDetails>
        );
        return (
            <div>
                <Header />
                <Row left= {personDetails}
                     right={starhipDetails} />
                {/*<RandomPlanet />*/}

                {/*<PeoplePage />*/}

                <div className="row mb2 margin">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected = {this.onPersonSelected}
                            getData = { this.swapiService.getAllPlanets}
                            renderItem = { (item) => (<span>{item.name}</span>)}
                        />
                    </div>
                </div>
                {/*    <div className="col-md-6">*/}
                {/*        <PersonDetails personId = {this.state.selectedPerson}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="row mb2">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemList*/}
                {/*            onItemSelected = {this.onPersonSelected}*/}
                {/*            getData ={ this.swapiService.getAllStarships}*/}
                {/*            renderItem = { (item) => `${item.name} (${item.model})`}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="col-md-6">*/}
                {/*        <PersonDetails personId = {this.state.selectedPerson}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }


};
