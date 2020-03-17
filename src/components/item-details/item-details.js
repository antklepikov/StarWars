import React, {Component} from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
};
export {Record};


export default class ItemDetails extends Component {
    state = {
        item: {},
        loading: true,
        image: null
    };


    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId) {

            this.updateItem()
        }
    }

    updateItem() {
        this.setState({loading: true});
        const {itemId, getData, getImageUrl} = this.props;


        getData(itemId)
            .then((item) => {
                this.setState({item, loading: false, image: getImageUrl(item)});
            })
            .catch((error) => {
                this.setState({loading: false});
            })
    }

    render() {

        const {item, loading, image} = this.state;

        return (
            <>
                {!loading && !!item &&
                <div className = "person-details card">
                    <img
                        className = "person-image"
                        src = {image}
                        alt = "None"
                    />
                    <div className = "card-body">
                        <h4>{item.name}</h4>
                        <ul className = "list-group list-group-flush">
                            {
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, {item});
                                })

                            }

                        </ul>
                    </div>
                </div>
                }
                {loading && (
                    <Spinner/>
                )}
            </>
        )
    }
}