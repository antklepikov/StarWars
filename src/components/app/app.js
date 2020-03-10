import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './app.css';
import PeoplePage from "../people-page";

export default class App extends Component{
    state = {
        selectedPerson: null,

    };

    render() {

        return (
            <div>
                <Header />
                <RandomPlanet />

                <PeoplePage />

            </div>
        );
    }


};
