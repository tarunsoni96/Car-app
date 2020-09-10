import CardDeckItem from "AppComponents/CardDeckItem";
import React, { Component } from "react";
import { Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
export default class CardSwiper extends Component {
  _renderItem = ({ item, index }) => {
    return <CardDeckItem item={item} />
  };

  componentDidMount(){
      setTimeout(() => {
          this._carousel.snapToItem(this.props.data.length,true)
        }, 100);
  }
  render() {
      const {data} = this.props
    return (
      <Carousel
        containerCustomStyle={{ marginTop: 40, }}
        layout='tinder'
        layoutCardOffset={`20`}
        ref={(c) => {
          this._carousel = c;
        }}
        data={data}
        renderItem={this._renderItem}
        sliderWidth={400}
        itemWidth={270}
      />
    );
  }
}

const styles = {
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};
