import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "../components/Item";

class FavouritesPage extends Component {
    constructor(props) {
        super(props);

        this.handleItemsContainerScroll = this.handleItemsContainerScroll.bind(this);
    }

    handleItemsContainerScroll() {
        if (!this.props.isLoading && this.props.favouriteItems.length > 0) {
            let lastDiv = document.querySelector("#content > div:last-child"),
                lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight,
                pageOffset = window.pageYOffset + window.innerHeight;
            if (pageOffset > lastDivOffset - 600) {
                this.props.nextPage();
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleItemsContainerScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleItemsContainerScroll);
    }

    render() {
        return (
            <div id="content" className="content">
                <a href="/">main page</a>
                {
                    this.props.favouriteItems.length > 0 ? 
                    this.props.favouriteItems.slice(0, (this.props.page + 1) * 5).map(item =>
                        <Item
                            item={item}
                            key={item.id}
                        />
                    ) : <p>Nothing to show</p>
                }
            </div>
        );
    }
}

export default connect(
    store => ({
        favouriteItems: store.favouriteItems,
        page: store.page
    }),
    dispatch => ({
        nextPage: () => dispatch({
            type: "NEXT_PAGE"
        })
    })
)(FavouritesPage);