import React, { Component } from "react";
import { connect } from "react-redux";
import loadItems from "../utils/loadItems";

class SearchComponent extends Component {
    constructor(props) {
        super(props);

        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    }

    handleSearchInputChange(event) {
        this.props.setInput(event.target.value.trim());
    }

    handleSearchButtonClick() {
        this.props.resetItems();
        this.props.getItems();
    }

    render() {
        return (
            <div className="search-section">
                <div className="container">
                    <input
                        autoComplete="on"
                        type="text"
                        id="search-input"
                        placeholder="Введите запрос"
                        value={this.props.searchInput}
                        onChange={this.handleSearchInputChange}
                    />
                </div>
                <a
                    href={"/" + this.props.searchInput}
                >
                    <input
                        type="button"
                        id="search-button"
                        value="Найти"
                        onClick={this.handleSearchButtonClick}
                    />
                </a>

            </div>
        );
    }
}

export default connect(
    store => ({
        searchInput: store.searchInput
    }),
    dispatch => ({
        setInput: searchInput =>
            dispatch({
                type: "SET_INPUT",
                searchInput: searchInput
            }),
        getItems: () =>
            dispatch(loadItems),
        resetItems: () =>
            dispatch({
                type: "RESET_ITEMS"
            })
    })
)(SearchComponent);