import CardDeckItem from "AppComponents/CardDeckItem";
import React, { Component } from "react";
import HelperMethods from 'Helpers/Methods'
import { Text,FlatList, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import 'Helpers/global'
import { Colors } from "UIProps/Colors";
import CustomText from "./CustomText";
import Fonts from "UIProps/Fonts";

let sliderWidth = 320
export default class CardSwiper extends Component {
  state = {
    data:[]
  }
  renderItem = ({ item, index }) => {
      if(item.instituteName == 'EOD'){
        return <CustomText text="End of list" font={Fonts.regular} style={{alignSelf:'center',marginBottom:10}}  size={18}  />
      } 
      return <CardDeckItem removeItem={(i)=>this.removeItem(i)} index={index} key={index} item={item} />;
    } 


  removeItem(i){
  }

  componentDidMount() {
    this.setState({data:this.props.data})
    if(this.props.setRef) this.props.setRef(this._carousel);
  }

  render() {
    const { data } = this.props;
    return (
      
      <FlatList 
        data={this.state.data}
        keyExtractor={(y, z) => z.toString()}
        style={{alignSelf:'center',paddingTop:10,marginBottom:20,width:global.deviceWidth}}
        // contentContainerStyle={{alignSelf:}}
        extraData={this.state}
        renderItem={this.renderItem}
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
