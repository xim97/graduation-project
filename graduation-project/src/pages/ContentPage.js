import React, { Component } from "react";
import SearchComponent from "../components/SearchComponent";
import ItemsContainer from "../components/ItemsContainer";
import Switcher from "../components/Switcher";
import { connect } from "react-redux";

class ContentPage extends Component {
    constructor(props) {
        super(props);

        if (this.props.match.params.request !== undefined) {
            this.props.setInput(this.props.match.params.request);
        }
    }

    render() {
        return (
            <div className="App">
                <a href="/saved/favourites">favourite items</a>
                <SearchComponent />
                <Switcher />
                <ItemsContainer />
            </div>
        );
    }
}

export default connect(
    store => ({}),
    dispatch => ({
        setInput: input => {
            dispatch({
                type: "SET_INPUT",
                searchInput: input
            })
        }
    })
)(ContentPage);