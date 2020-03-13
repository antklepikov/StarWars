import React, {Component} from 'react';

import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import PersonDetails from "../person-details/person-details";

const Row = ({left, right}) => {
    return (

        <div className="row mb2 margin">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );

};

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
            <PersonDetails personId={this.state.selectedPerson}/>
        );

        return (
            <div>
                <Row left={itemList}
                     right={personDetails}/>
            </div>
        );
    }
}