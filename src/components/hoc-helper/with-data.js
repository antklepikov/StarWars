import React, {Component} from "react";
import Spinner from "../spinner";

const withData = (View, getData) => {
    return class extends Component {

        state = {
            data: {},
            loading: true

        };

        componentDidMount() {
            const {getData} = this.props;

            getData()
                .then((data) => {
                    this.setState({data, loading: false});
                });
        }
        render() {
            const {data, loading} = this.state;
            if (loading) {
                return <Spinner/>;
            }

            return <View { ...this.props} data = {data} />
        }

    };
};
export default withData