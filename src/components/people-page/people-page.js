import React, {Component} from 'react';

import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import PersonDetails from "../item-details/item-details";
import Row from "../row";


export default class PeoplePage extends Component {
    state = {
        selectedPerson: 3
    };
    swapiService = new SwapiService();
    onPersonSelected = (id) => {
        this.setState({selectedPerson: id});
    };


    render() {
        const itemList = (
            <ItemList
                onItemSelected = {this.onPersonSelected}
                getData = {this.swapiService.getAllPeople}
                renderItem = { (item) => `${item.name} ${item.gender}`} />
        );
        const personDetails = (
            <PersonDetails itemId={this.state.selectedPerson}/>
        );

        return (
            <div>
                <Row left={itemList}
                     right={personDetails}/>
            </div>
        );
    }
}