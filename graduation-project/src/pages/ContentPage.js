import React, { Component } from "react";
import SearchComponent from "../components/SearchComponent";
import ItemsContainer from "../components/ItemsContainer";
import Switcher from "../components/Switcher";
import { connect } from "react-redux";
import loadItems from "../utils/loadItems";
import styled from "styled-components";

const StyledLink = styled.div`
    animation: blowYourEyes  0.1s infinite;
    align-self: center;
    margin: 50px 0;
`;

class ContentPage extends Component {
    constructor(props) {
        super(props);

        if (this.props.match.params.request !== undefined) {
            this.props.setInput(this.props.match.params.request);
            this.props.getItems();
        }
    }

    render() {
        return (
            <div className="App">
                <StyledLink><a href="/saved/favourites">favourite items</a></StyledLink>                
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
        },
        getItems: () =>
            dispatch(loadItems)
    })
)(ContentPage);