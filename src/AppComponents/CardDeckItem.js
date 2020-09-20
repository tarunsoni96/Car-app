import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import Fonts from "UIProps/Fonts";
import NetworkAwareContent from "AppLevelComponents/UI/NetworkAwareContent";
import HelperMethods from "Helpers/Methods";
import SubHeader from "AppLevelComponents/UI/SubHeader";
import * as Animatable from "react-native-animatable";
import MobxStore from "StorageHelpers/MobxStore";
import { observer } from "mobx-react";

import Constants from "Helpers/Constants";
import { apiFuncGet } from "ServiceProviders/ApiCaller";
import { FlatList } from "react-native";
import { Card } from "react-native-elements";
import Icons from "AppLevelComponents/UI/Icons";
import { Colors } from "UIProps/Colors";
import { TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native";
import FirstName from "AppLevelComponents/UI/FormInputs/FirstName";
import { ImageBackground } from "react-native";
import CustomRadioButton from "AppLevelComponents/UI/CustomRadioButton";
import CustomButton from "AppLevelComponents/UI/CustomButton";

let borderRadius = 25;
@observer
class CardDeckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isApiCall: false,
      animation: "",
      added: false,
    };
  }

  renderStars() {
    let r = Math.floor(Math.random() * 5);
    let icons = [];
    if (r) {
      icons = new Array(r).fill(
        <Icons
          lib="AntDesign"
          style={{ bottom: 1 }}
          name="star"
          color={"#F8E31E"}
        />
      );

      for (let i = r; i < 5; i++) {
        icons.push(
          <Icons
            lib="AntDesign"
            style={{ bottom: 1 }}
            name="staro"
            color={"#F8E31E"}
          />
        );
      }
    } else {
      icons.push(<CustomText text="No ratings yet" color={Colors.textLight} font={Fonts.regular} size={17} />);
    }
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "",
        }}
      >
        {icons}
      </View>
    );
  }
  handleViewRef = (ref) => (this.view = ref);

  addToShortlist() {
    this.setState({ added: !this.state.added });
    this.view
      .pulse(600)
      .then((endState) =>
        console.log(endState.finished ? {} : "bounce cancelled")
      );
  }

  render() {
    let borderRad = 70;
    const { item } = this.props;
    return (
      <Animatable.View
        animation={""}
        duration={600}
        delay={100 * this.props.index}
      >
        <View
          style={{
            width: "90%",
            backgroundColor: "#fff",
            elevation: 14,
            alignSelf: "center",
            shadowColor: "#000",
            marginBottom: 20,
            shadowOffset: { height: 1, width: 0 },
            shadowOpacity: 0.25,
            shadowRadius: 10,
            borderRadius: borderRadius,
          }}
        >
          <View
            style={{
              borderRadius: 10,
            }}
          >
            <View style={{ justifyContent: "flex-end" }}>
              <View style={{ alignItems: "center" }}>
                <ImageBackground
                  source={{
                    uri:
                      "https://cdn1.acedms.com/photos/listing/2018-05-12/a5f4a61f00b558744739474a3d68a63b_large.jpg",
                  }}
                  style={{ width: "100%", height: 340, borderRadius }}
                  imageStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  resizeMode="cover"
                >
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "rgba(0,0,0,0.3)",
                      borderTopLeftRadius: borderRadius,
                      borderTopRightRadius: borderRadius,
                    }}
                  />
                </ImageBackground>
              </View>
            </View>
          </View>

          <View style={{ padding: 14, paddingVertical: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.circle}>
                  <Image
                    source={{
                      uri:
                        "https://sl.sbs.com.au/public/image/file/b8cfe314-f89d-4605-977f-829468d33556",
                    }}
                    style={{ borderRadius: 40, height: 63, width: 63 }}
                    resizeMode="cover"
                  />
                </View>

                <View style={{ paddingHorizontal: 5 }} />

                <View style={{}}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ width: "72%", paddingLeft: 6 }}>
                      <CustomText
                        text={"Harry singh"}
                        color={Colors.textPrimary}
                        font={Fonts.bold}
                        size={21}
                        marginTop={4}
                      />

                      {this.renderStars()}
                    </View>
                    <Animatable.View
                      animation={this.state.animation}
                      ref={this.handleViewRef}
                    >
                      <TouchableOpacity
                        style={{
                          width: 40,
                          marginLeft: -13,
                          height: 40,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onPress={() => this.addToShortlist()}
                      >
                        <Icons
                          lib="AntDesign"
                          name={this.state.added ? "heart" : "hearto"}
                          color={this.state.added ? Colors.accent : "#000"}
                        />
                      </TouchableOpacity>
                    </Animatable.View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={styles.courseFee}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CustomText
                  text={`${"\u20B9"}2,000`}
                  color={Colors.textPrimary}
                  font={Fonts.bold}
                  size={20}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icons lib="AntDesign" name={"clockcircle"} size={19} />
              <CustomText
                text={" 15 days"}
                color={Colors.textPrimary}
                font={Fonts.black}
                size={18}
              />
            </View>

            <TouchableOpacity
              text="BOOK"
              style={{
                backgroundColor: "#000",
                borderRadius: 0,
                alignSelf: "flex-end",
                borderBottomRightRadius: borderRadius,
                margin: 5,
                alignItems: "center",
                paddingVertical: 13,
                paddingHorizontal: 30,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CustomText text="book" size={19} color={Colors.buttonText} />
              <View style={{ paddingHorizontal: 5 }} />
              <Icons
                lib="AntDesign"
                name="arrowright"
                color={Colors.buttonText}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
  },

  courseFee: {
    padding: 7,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});
export default CardDeckItem;
