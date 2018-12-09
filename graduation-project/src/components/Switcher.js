import React, { Component } from "react";
import { connect } from "react-redux";
import loadItems from "../utils/loadItems";

class Switcher extends Component {
    constructor(props) {
        super(props);

        this.handleContentTypeChange = this.handleContentTypeChange.bind(this);
    }

    handleContentTypeChange(event) {        
        this.props.setSection(event.target.value);
        this.props.resetItems();
    }

    render() {
        return (
            <div className="pick-section" id="pick-section">
                <label>
                    <input
                        type="radio"
                        name="contentType"
                        value="gifs"
                        checked={this.props.section === "gifs"}
                        onChange={this.handleContentTypeChange}
                    />
                    Гифки
                </label>
                <label>
                    <input
                        type="radio"
                        name="contentType"
                        value="stickers"
                        checked={this.props.section === "stickers"}
                        onChange={this.handleContentTypeChange}
                    />
                    Стикеры
                </label>
            </div>
        );
    }
}

export default connect(
    store =>
        ({
            section: store.section
        }),
    dispatch =>
        ({
            setSection: section => {
                dispatch({
                    type: "SET_SECTION",
                    section: section
                });
                dispatch(loadItems);
            },
            resetItems: () => {
                dispatch({
                    type: "RESET_ITEMS"
                })
            }
        })
)(Switcher);