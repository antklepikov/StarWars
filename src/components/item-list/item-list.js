import React, {Component} from 'react';

import SwapiService from "../../services/swapi-service";

import './item-list.css';
import Spinner from "../spinner";

export default class ItemList extends Component {

    state = {
        itemList: {},
        loading: true

    };

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({itemList, loading: false});
            });
    }

    renderItems(arr) {
        return (
            <ul>
                {
                    arr.map((item, key) => {
                        const {id} = item;
                        const label = this.props.renderItem(item);

                        return (
                            <li className="list-group-item"
                                key={ id }
                                onClick={ () => this.props.onItemSelected(id)}
                            >
                                {label}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {

        const {itemList, loading} = this.state;
        if (loading) {
            return <Spinner/>;
        }
        const items = this.renderItems(itemList);
        if (!loading && !!items) {
            return (
                <ul className="item-list list-group">
                    {items}
                </ul>
            );
        }
    }
}