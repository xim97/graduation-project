import React, { Component } from "react";
import SearchComponent from "../components/SearchComponent";
import ItemsContainer from "../components/ItemsContainer";
import Switcher from "../components/Switcher";

export default class GifsPage extends Component {
    render() {
        return (
            <div className="App">               
                <a href="/favourites">fav</a>
                <SearchComponent />
                <Switcher />
                <ItemsContainer />
            </div>
        );
    }
} 