import React, { Component } from "react";
import styled from 'styled-components';
import isFavouriteItem from "../utils/isFavouriteItem";
import { connect } from "react-redux";

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;

class Item extends Component {
    constructor(props) {
        super(props);

        this.handleClickFavouriteButton = this.handleClickFavouriteButton.bind(this);
    }

    handleClickFavouriteButton() {      
        if (isFavouriteItem(this.props.item, this.props.favouriteItems)) {
            this.props.deleteFavouriteItem(this.props.item);
        } else {
            this.props.addFavouriteItem(this.props.item);
        }
        this.forceUpdate();
    }

    render() {
       
        let iconClass = "fa-star ";
        var temp = isFavouriteItem(this.props.item, this.props.favouriteItems);
        iconClass += temp ? "fas" : "far";
        return (
            <div className="entity" entityid={this.props.item.id}>
                <Header>
                    <h5>{this.props.item.title}</h5>
                    <i
                        onClick={this.handleClickFavouriteButton}
                        className={iconClass}
                    ></i>
                </Header>
                <img
                    alt={this.props.item.title}
                    src={this.props.item.images.downsized.url}
                />
            </div>
        );
    }
}

export default connect(
    store => ({
        favouriteItems: store.favouriteItems
    }),
    dispatch => ({
        addFavouriteItem: (newItem) =>
            dispatch({
                type: "ADD_ITEM",
                item: newItem
            }),
        deleteFavouriteItem: (deletingItem) =>
            dispatch({
                type: "DELETE_ITEM",
                item: deletingItem
            })
    })
)(Item);