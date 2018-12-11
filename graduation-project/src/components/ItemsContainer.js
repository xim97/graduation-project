import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import loadItems from "../utils/loadItems";

class ItemsContainer extends Component {
    constructor(props) {
        super(props);

        this.handleItemsContainerScroll = this.handleItemsContainerScroll.bind(this);
    }

    handleItemsContainerScroll() {
        if (!this.props.isLoading && this.props.items.length > 0) {
            let lastDiv = document.querySelector("#content > div:last-child"),
                lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight,
                pageOffset = window.pageYOffset + window.innerHeight;
            if (pageOffset > lastDivOffset - 600) {
                this.props.nextPage();
                this.props.getItems();
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
            <div
                id="content"
                className="content"
            >
                {
                    this.props.items.map(item =>
                        <Item
                            item={item}
                            key={item.id}
                        />
                    )
                }
                {
                    this.props.isLoading && <p>Loading...</p>
                }
            </div>
        );
    }
}

export default connect(
    store => ({
        items: store.items,
        isLoading: store.isLoading
    }),
    dispatch => ({
        nextPage: () =>
            dispatch({
                type: "NEXT_PAGE"
            }),
        getItems: () =>
            dispatch(loadItems)
    })
)(ItemsContainer);
