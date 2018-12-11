import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "../components/Item";

class FavouritesPage extends Component {
    render() {
        return (
            <div id="content" className="content">
                <a href="/">main</a>
                {
                    this.props.favouriteItems.map(item =>
                        <Item
                            item={item}
                            key={item.id}
                        />
                    )
                }
            </div>
        );
    }
}

export default connect(
    store => ({
        favouriteItems: store.favouriteItems
    }),
    dispatch => ({

    })
)(FavouritesPage);