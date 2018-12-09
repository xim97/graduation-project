import React, { Component } from "react";
import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;

export default class Item extends Component {
    render() {
        return (
            <div className="entity" entityid={this.props.item.id}>
                <Header>
                    <h5>{this.props.item.title}</h5>
                    <i className="fa-star far"></i>
                </Header>                
                <img
                    alt={this.props.item.title}
                    src={this.props.item.images.downsized.url}
                />
            </div>
        );
    }
}