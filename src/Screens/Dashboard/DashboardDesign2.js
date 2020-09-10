import React, { Component } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import Fonts from "UIProps/Fonts";
import NetworkAwareContent from "AppLevelComponents/UI/NetworkAwareContent";
import LinearGradient from "react-native-linear-gradient";

import HelperMethods from "../../Helpers/Methods";
import SubHeader from "../../AppLevelComponents/UI/SubHeader";
import MobxStore from "StorageHelpers/MobxStore";
import { observer } from "mobx-react";
import "Helpers/global";
import Constants from "Helpers/Constants";
import { apiFuncGet } from "ServiceProviders/ApiCaller";
import { FlatList } from "react-native";
import { Card } from "react-native-elements";
import Icons from "AppLevelComponents/UI/Icons";
import { Colors } from "UIProps/Colors";
import { TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native";
import FirstName from "AppLevelComponents/UI/FormInputs/FirstName";
import CardSwiper from "AppLevelComponents/UI/CardSwiper";
import { ImageBackground } from "react-native";
import NoHorizontalMarginView from "AppLevelComponents/UI/NoHorizontalMarginView";
import { widthPercentageToDP } from "react-native-responsive-screen";
import CustomButton from "AppLevelComponents/UI/CustomButton";

let dummyTutors = [
  {
    instituteName: "Maruti driving school",
    carImage: require("assets/img/car.png"),
    price: `${"\u20B9"} 2,000`,
    userImage: "https://www.techvrm.com/Transporter/assets/dist/img/m1.png",
  },

  {
    instituteName: "Maruti driving school",
    carImage: require("assets/img/car.png"),
    price: `${"\u20B9"} 2,000`,
    userImage: "https://www.techvrm.com/Transporter/assets/dist/img/m1.png",
  },

  {
    instituteName: "Maruti driving school",
    carImage: require("assets/img/car.png"),
    price: `${"\u20B9"} 2,000`,
    userImage: "https://www.techvrm.com/Transporter/assets/dist/img/m1.png",
  },

  {
    instituteName: "Maruti driving school",
    carImage: require("assets/img/car.png"),
    price: `${"\u20B9"} 2,000`,
    userImage: "https://www.techvrm.com/Transporter/assets/dist/img/m1.png",
  },
];

@observer
class DashboardDesign2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isApiCall: false,
      showWhiteInput: true,
    };
  }

  getData = () => {};

  onRefresh = () => {};

  onBackPress = () => {
    HelperMethods.appExitPrompter();
  };

  componentDidMount() {
    this.fetchHotels();
  }

  fetchHotels() {
    this.setState({ isApiCall: true });
    apiFuncGet("hotels")
      .then((resp) => {
        this.setState({ isApiCall: false, data: resp });
      })
      .catch((err) => {
        this.setState({ isApiCall: "failed" });
      });
  }

  render() {
    return (
      <Container
        scrollEnabled={false}
        safeAreaColor={Colors.screenBG}
        showHeader={false}
      >
        <NoHorizontalMarginView verticalAlso style={{}}>
          <LinearGradient
            useAngle={true}
            angle={180}
            angleCenter={{ x: 0.25, y: 0.25 }}
            colors={["#F5FF00", "#FFE200"]}
            style={[
              {
                flex: 1,
                height: global.deviceHeight,
              },
            ]}
          >
            <ImageBackground
              source={require("assets/img/cartutorial.png")}
              style={{
                height: "70%",
                marginTop: 0,
                padding: global.contentPadding,
              }}
            >
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <CustomText
                  text="Welcome To"
                  color="#040714"
                  size={30}
                  font={Fonts.nunito.bold}
                />
                <CustomText
                  text="Driving School"
                  color="#040714"
                  size={37}
                  font={Fonts.nunito.black}
                />
                <CustomText
                  text="Start learning with us"
                  color="#040714"
                  style={{ marginVertical: 6 }}
                  size={25}
                  font={Fonts.nunito.semiBold}
                />
                <CustomText
                  text="Enter your contact details below to get started"
                  color="#040714"
                  style={{ bottom: 0, marginVertical: 10 }}
                  size={20}
                  font={Fonts.nunito.regular}
                />
              </View>
            </ImageBackground>

            <View style={{ padding: global.contentPadding }}>
              {this.state.showWhiteInput ? (
                <View
                  style={{
                    backgroundColor: "#fff",
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  <CustomText
                    text="Enter Contact Number"
                    color="#888C9F"
                    color="#888C9F"
                    size={20}
                    font={Fonts.nunito.regular}
                  />
                </View>
              ) : (
                <View style={{ flexDirection: "row", alignItems: "center",justifyContent:'space-between' }}>
                  <View
                    style={{
                      backgroundColor: "#FFFDE6",
                      borderBottomLeftRadius: 35,
                      padding: 16,
                      borderBottomRightRadius: 30,
                      borderTopRightRadius: 30,
                      flex:1,
                    }}
                  >
                    <CustomText
                      text="Enter Contact Number"
                      color="#040714"
                      size={20}
                      font={Fonts.nunito.regular}
                    />
                  </View>
                    <View style={{paddingHorizontal:5}} />
                  <TouchableOpacity onPress={() =>
                  {HelperMethods.animateLayout(); this.setState({ showWhiteInput: !this.state.showWhiteInput })}
                } style={styles.circle} >
                    <Icons lib="AntDesign" name='right' color='#fff' />
                  </TouchableOpacity>
                </View>
              )}
                  {this.state.showWhiteInput ? 
              <CustomButton
                text="Get Started"
                gradColor="#040714"
                onPress={() =>
                  {HelperMethods.animateLayout(); this.setState({ showWhiteInput: !this.state.showWhiteInput })}
                }
                containerStyle={{ marginTop: 30 }}
              />
              :null
                  }
            </View>
          </LinearGradient>
        </NoHorizontalMarginView>
      </Container>
    );
  }
}

const styles ={
  circle: {
      width:  55,
      height: 55,
      elevation:5,
      borderRadius: 100 / 2,
      backgroundColor: "#040714",
      alignItems: "center",
      justifyContent: "center"
    },
}

export default DashboardDesign2;
