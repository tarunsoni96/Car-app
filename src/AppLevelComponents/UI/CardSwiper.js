import CardDeckItem from "AppComponents/CardDeckItem";
import React, { Component } from "react";
import { Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Colors } from "UIProps/Colors";
import CustomText from "./CustomText";
export default class CardSwiper extends Component {
  _renderItem = ({ item, index }) => {
    if (item.instituteName == "EOD") {
      return (
        <View
          style={{
            width: 320,
            alignItems: "center",
            justifyContent: "center",
            height: "87%",
          }}
        >
          <CustomText text="Thats' it" color={Colors.textPrimary} size={24} />
        </View>
      );
    } else {
      return <CardDeckItem item={item} />;
    }
  };

  componentDidMount() {
    if (this.props.setRef) this.props.setRef(this._carousel);
  }
  render() {
    const { data } = this.props;
    return (
      <Carousel
        containerCustomStyle={{ marginTop: 40 }}
        layoutCardOffset={`20`}
        ref={(c) => {
          this._carousel = c;
        }}
        lockScrollWhileSnapping
        enableMomentum
        inactiveSlideScale={0.8}
        swipeThreshold={10}
        data={data}
        renderItem={this._renderItem}
        sliderWidth={400}
        itemWidth={320}
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
