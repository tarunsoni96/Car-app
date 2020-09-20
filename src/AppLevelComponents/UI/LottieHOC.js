import React, { Component } from "react";
import { Text, Image } from "react-native";
import "Helpers/global";
import "Helpers/Methods";
import EStyleSheet from "react-native-extended-stylesheet";
import { LanguageConsumer } from "AppLevelComponents/LanguageSelector/LanguageContext";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import HelperMethods from "Helpers/Methods";
import Constants from "Helpers/Constants";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import LottieView from 'lottie-react-native';

export default class LottieHOC extends Component {
  render() {
    let {
     lottie
    } = this.props;

      let size=100
    return (
      <LottieView style={{width:size,height:size}} source={ lottie || require('assets/lotties/loading.json')} autoPlay loop />
    );
  }
}

const styles = EStyleSheet.create({
  text: {
    textAlign: "center",
  }
});
