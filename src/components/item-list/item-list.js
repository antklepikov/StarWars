import React, {Component} from 'react';

import SwapiService from "../../services/swapi-service";
import {withData} from '../hoc-helper';
import './item-list.css';
import Spinner from "../spinner";

const ItemList = (props) => {

       const { data, loading, onItemSelected, } = props;
       const items = data.map((item) => {
            const {id} = item;
            //const label = props.renderItem(item);
           const label = props.children(item)
            return (
                <li className="list-group-item"
                    key={ id }
                    onClick={ () => this.props.onItemSelected(id)}
                >
                    {label}
                </li>
            )
        });

        if (!loading && !!items) {
            return (
                <ul className="item-list list-group margin">
                    {items}
                </ul>
            );
        }
    };




const { getAllPeople } = new SwapiService();
export default withData(ItemList, getAllPeople);