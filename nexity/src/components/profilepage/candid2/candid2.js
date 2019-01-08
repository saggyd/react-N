import React, { Component } from 'react';

import PageBanner from '../../pageBanner/pageBanner';
import './candid2.css';
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
  };

class Candid2 extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            items: Array.from({ length: 20 }),
            hasMore: true
        };
    }

    fetchMoreData = () => {
        if (this.state.items.length >= 500) {
            this.setState({ hasMore: false });
            return;
        }
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
            items: this.state.items.concat(Array.from({ length: 20 }))
            });
        }, 1500);
    };

  render() {
    return (
        <div className="candid1">
            <PageBanner />
            <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={this.state.hasMore}
                loader={<h4>Loading...</h4>}
                scrollableTarget="innerWrapper"
                >
                {this.state.items.map((i, index) => (
                    <div style={style} key={index}>
                    div - #{index}
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
  }
}

export default Candid2;