import React, { Component } from "react";
import { StyleSheet,Vibration, TouchableOpacity, View, Image } from "react-native";
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
          color={Colors.accent}
        />
      );
    } else {
      icons.push(<CustomText text="No ratings yet" color={"#fff"} size={20} />);
    }
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          bottom: 2,
          left: 0,
          right: 0,
          justifyContent: "space-evenly",
        }}
      >
        {icons}
      </View>
    );
  }
  handleViewRef = (ref) => (this.view = ref);

  addToShortlist() {
    Vibration.vibrate(30)
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
                      "https://cnet2.cbsistatic.com/img/A9sobjTXrgz0s-7vqg0N9dy2M9U=/940x0/2020/01/15/8776e381-47d9-475a-bd6c-b19fc9f3c21d/ferrari.jpg",
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

                  <View style={styles.courseFee}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <CustomText
                        text={`${"\u20B9"}2,000`}
                        color={Colors.textPrimary}
                        font={Fonts.bold}
                        size={20}
                      />
                    </View>
                  </View>

                  {this.renderStars()}
                </ImageBackground>
              </View>
            </View>
          </View>

          <View style={{ padding: 14, paddingVertical: 13 }}>
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
                        "https://www.getuppeople.com/upload/photo/users_profile/2419_.jpg",
                    }}
                    style={{ borderRadius: 40, height: 63, width: 63 }}
                    resizeMode="cover"
                  />
                </View>

                <View style={{ paddingHorizontal: 5 }} />

                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ paddingLeft: 6 }}>
                      <CustomText
                        text={"Shyam singh"}
                        color={Colors.textPrimary}
                        font={Fonts.bold}
                        size={21}
                        marginTop={4}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: 4,
                          alignItems: "center",
                        }}
                      >
                        <Icons lib="AntDesign" name={"clockcircleo"} size={16} />
                        <CustomText
                          text={" 15 days"}
                          color={Colors.textPrimary}
                          font={Fonts.black}
                          size={18}
                        />
                      </View>
                      <Animatable.View
                      animation={this.state.animation}
                      ref={this.handleViewRef}
                    >
                      
                    
                      <TouchableOpacity
                        style={{
                        }}
                        onPress={() => this.addToShortlist()}
                      >
                      <View
                        style={{ flexDirection: "row", alignItems: "center",marginTop:4 }}
                      >
                        <Icons
                        size={16}
                          lib= { this.state.added ? 'AntDesign' : "FontAwesome"}
                          name={this.state.added ? "delete" : "angellist"}
                          color={this.state.added ? '#BA2F50' : "#000"}
                        />

                        <CustomText
                          text={this.state.added ? 'In shortlist' : "Add to shortlist"}
                          color={this.state.added ? '#BA2F50' : Colors.textPrimary}
                          // font={Fonts.regular}
                          style={{marginLeft:5}}
                          size={18}
                        />
                      </View>
                      </TouchableOpacity>
                    </Animatable.View>

                    </View>
                    
                  </View>
                </View>
              </View>
            </View>
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
    position: "absolute",
    left: 15,
    backgroundColor: Colors.accent,
    padding: 7,
    top: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});
export default CardDeckItem;
