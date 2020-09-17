import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import Fonts from "UIProps/Fonts";
import NetworkAwareContent from "AppLevelComponents/UI/NetworkAwareContent";
import HelperMethods from "Helpers/Methods";
import SubHeader from "AppLevelComponents/UI/SubHeader";
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

@observer
class CardDeckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isApiCall: false,
    };
  }

  render() {
    let borderRad = 70;
    const { item } = this.props;
    return (
      <View
        style={{
          width: 320,
          backgroundColor: "#fff",
          elevation: 2,
          shadowColor: "#000",
          shadowOffset: { height: 1, width: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 10,

          borderRadius: 10,
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
                   'https://cnet2.cbsistatic.com/img/A9sobjTXrgz0s-7vqg0N9dy2M9U=/940x0/2020/01/15/8776e381-47d9-475a-bd6c-b19fc9f3c21d/ferrari.jpg'
                }}
                style={{ width: 320, height: 340, borderRadius: 10 }}
                imageStyle={{ width: "100%", height: "100%", borderRadius: 10,borderBottomLeftRadius:0,borderBottomRightRadius:0 }}
                resizeMode="cover"
              >
                <View style={styles.courseFee}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <CustomText
                      text={"Course Fee "}
                      color={Colors.textPrimary}
                      font={Fonts.semiBold}
                      size={15}
                    />
                    <CustomText
                      text={`${"\u20B9"}2,000`}
                      color={Colors.textPrimary}
                      font={Fonts.bold}
                      size={20}
                    />
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, padding: 20 }}>
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
                  style={{ borderRadius: 40, height: 53, width: 53 }}
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
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <CustomText
                      text={"Rating"}
                      color={Colors.textDark}
                      font={Fonts.bold}
                      size={20}
                    />

                    <CustomText
                      text={" 4.7 "}
                      color={Colors.textDark}
                      font={Fonts.bold}
                      size={20}
                    />
                    <Icons
                      lib="AntDesign"
                      style={{ bottom: 1 }}
                      name="star"
                      color={Colors.accent}
                    />
                  </View>

                  <Image
                    source={require("assets/img/bookmarkActive.png")}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                  />
                </View>

                <CustomText
                  text={"Ashu motor driving school"}
                  color={Colors.textDark}
                  font={Fonts.semiBold}
                  size={20}
                  marginTop={4}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
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
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 7,
    top: 20,
    paddingHorizontal: 13,
    borderRadius: 20,
  },
});
export default CardDeckItem;
