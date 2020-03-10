import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends Component {
    state = {
        person: null,
        loading: true
    };

    swapiService = new SwapiService();

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personId) {

            this.updatePerson()
        }
    }

    updatePerson() {
        this.setState({loading: true});
        const { personId } = this.props;
        // if (!personId) {
        //     return;
        // }

        this.swapiService
            .getPerson(personId)
                .then((person) => {
                    this.setState({person, loading: false});
                })
                .catch((error) => {
                    this.setState({loading: false});
                })
    }

    render() {

        const { person, loading } = this.state;

        return (
            <>
                {!loading && (
                    <div className="person-details card">
                        <img
                            className="person-image"
                            src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
                            alt="None"
                        />
                        <div className="card-body">
                            <h4>{person.name}</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span className="term">Gender</span>
                                    <span>{person.gender}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">Birth Year</span>
                                    <span>{person.birthYear}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">Eye Color</span>
                                    <span>{person.eyeColor}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                {loading && (
                    <Spinner />
                )}
             </>
        )
    }
}