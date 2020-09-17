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
import Header from "AppLevelComponents/UI/Header";
import { ImageBackground } from "react-native";
import NoHorizontalMarginView from "AppLevelComponents/UI/NoHorizontalMarginView";
import CardSwiper from "AppLevelComponents/UI/CardSwiper";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import { TouchableWithoutFeedback } from "react-native";

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
    instituteName: "EOD",
  },

];

@observer
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.inputValObj = {};
    this.state = {
      isApiCall: false,
      showWhiteInput: true,
    };
  }

  onBackPress = () => {
    HelperMethods.appExitPrompter();
  };

  componentDidMount() {}

  setGlobalRef(ref) {
    if (!this.vpRef) {
      this.vpRef = ref;
      this.forceUpdate();
    }
  }

  onPressLeft(){
    this.caraousal.snapToPrev()
  }

  onPressRight(){
    this.caraousal.snapToNext()
  }


  render() {
    return (
      <Container
        scrollEnabled={false}
        safeAreaColor={Colors.screenBG}
        showHeader={false}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Header title="Driving schools." hideBack />
        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('OnboardingStack')} >

          <View style={{ alignItems: "center" }}>
            <Image
              source={require("assets/img/location.png")}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
            <CustomText font={Fonts.semiBold} text="Noida" color="#444B65" />
          </View>
          </TouchableWithoutFeedback>
        </View>
        <NoHorizontalMarginView style={{ flex: 1 }}>
          <ImageBackground
            source={require("assets/img/dashboardBG.png")}
            style={{ flex: 1 }}
            imageStyle={{ marginLeft: 0 }}
            resizeMode="cover"
          >
            <CardSwiper setRef={ref => this.caraousal = ref} data={dummyTutors} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: global.contentPadding,
              }}
            >
              <CustomButton
                lib={"Entypo"}
                size={30}
                btnStyle={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#C9C9C9",
                }}
                iconColor="#040714"
                round
                press={()=>this.onPressLeft()}
                icon={"chevron-left"}
              />
              <View
                style={{
                  borderRadius: 90,
                  backgroundColor: "#040714",
                  paddingHorizontal: 20,
                  padding: 13,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icons
                  lib="Feather"
                  name="bookmark"
                  color={Colors.buttonText}
                  size={18}
                />

                <CustomText
                  text="Add to Shortlist"
                  color={Colors.buttonText}
                  style={{ marginLeft: 15 }}
                  size={14}
                />
              </View>
              <CustomButton
                press={()=>this.onPressRight()}

                lib={"Entypo"}
                size={30}
                btnStyle={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#C9C9C9",
                }}
                iconColor="#040714"
                round
                icon={"chevron-right"}
              />
            </View>
          </ImageBackground>
        </NoHorizontalMarginView>
      </Container>
    );
  }
}

export default Dashboard;
