import React, { Component } from "react";
import { Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomText from "AppLevelComponents/UI/CustomText";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "react-native-elements";
import "Helpers/global";

import HelperMethods from "Helpers/Methods";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Loader from "./Loader";

export default class CustomButton extends Component {
  state = {
    animation: "",
  };
  onPress() {
    let { onPress } = this.props;
    if (!onPress) {
      alert("Provide onpress prop");
      return;
    }
    onPress();
    Keyboard.dismiss();
  }

  componentWillReceiveProps(nextProps) {
    const { isApiCall } = nextProps;
    this.setState({ animation: isApiCall == "failed" ? "shake" : "" });
  }


  renderNormal() {
    let { text, containerStyle, gradStyle,gradColor, half, isApiCall } = this.props;
    return (
      <Animatable.View
        animation={this.state.animation}
        useNativeDriver={true}
        duration={600}
        style={[
          {
            width: "100%",
            ...containerStyle,
          },
          half && { width: widthPercentageToDP(38), alignSelf: "flex-end",borderRadius:10 },
        ]}
      >
        <TouchableWithoutFeedback onPress={() => this.onPress()}>
          <LinearGradient
            useAngle={true}
            angle={180}
            angleCenter={{ x: 0.25, y: 0.25 }}
            colors={[gradColor,gradColor]}
            style={[
              styles.btn,
              {
                padding: widthPercentageToDP(4),
                alignItems: "center",
                ...gradStyle,
              },
            ]}
          >
            {isApiCall ? (
              <Loader  color={"#fff"} />
            ) : (
              <CustomText
                font={Fonts.nunito.regular}
                text={text || "Button"}
                size={wp(4.8)}
                color="#fff"
              />
            )}
          </LinearGradient>
        </TouchableWithoutFeedback>
      </Animatable.View>
    );
  }
  render() {
    let { showGradient } = this.props;
    return <>{this.renderNormal()}</>;
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  button: {
    height: "54rem",
    justifyContent: "center",
    borderRadius: 10,
  },

  btn: {
    borderRadius: 12,

  },
});
