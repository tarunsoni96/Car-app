import React, { Component } from "react";
import { Image, Animated, View } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import Fonts from "UIProps/Fonts";
import NetworkAwareContent from "AppLevelComponents/UI/NetworkAwareContent";
import LinearGradient from "react-native-linear-gradient";
import "Helpers/global";
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
import { SafeAreaView } from "react-native";
import LottieHOC from "AppLevelComponents/UI/LottieHOC";
import { TouchableOpacity } from "react-native";
import CustomTouchableOpacity from "AppLevelComponents/UI/CustomTouchableOpacity";

const HEADER_EXPANDED_HEIGHT = 120;
const HEADER_COLLAPSED_HEIGHT = 80;

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
let scrollY =  new Animated.Value(0)

@observer
class Dashboard extends Component {

  constructor(props) {
    

    super(props);

    this.inputValObj = {};
    this.state = {
      isApiCall: true,
      showWhiteInput: true,
      headerHeight:113,
  

    };
  }

  onBackPress = () => {
    HelperMethods.appExitPrompter();
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isApiCall: false });
    }, 2400);
  }

  setGlobalRef(ref) {
    if (!this.vpRef) {
      this.vpRef = ref;
      this.forceUpdate();
    }
  }

  onPressLeft() {
    this.caraousal.snapToPrev();
  }

  onPressRight() {
    this.caraousal.snapToNext();
  }

  setHeaderHeight(e){
    var {x, y, width, height} = e.nativeEvent.layout;
    this.setState({headerHeight:height})
  }

  render() {
  const headerTranslate =  scrollY.interpolate({
        inputRange: [0, this.state.headerHeight ],
      outputRange: [0, -this.state.headerHeight],
      extrapolate: "clamp",
    })

    // const headerFontSize = this.state.scrollY.interpolate({
    //   inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    //   outputRange: [30, 20],
    //   extrapolate: "clamp",
    // });

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Animated.View
        onLayout={(event) => {
          this.setHeaderHeight(event)
}}
          style={{
            backgroundColor: "red",
            // alignItems:'center',
            transform:[
              {translateY:headerTranslate}
            ],
            justifyContent: "center",
            padding: global.contentPadding,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Header
                titleStyle={{
                  color: Colors.textPrimary,
                  fontSize: 26,
                  fontFamily: Fonts.semiBold,
                }}
                title="Tutors"
                hideBack
              />
              <View style={{flexDirection:'row',alignItems:'center',marginLeft:-5,marginTop:14}} >
                <Image
                  source={require("assets/img/location.png")}
                  style={{ width: 30, height: 30 }}
                  resizeMode="contain"
                />
                <CustomText
                  font={Fonts.semiBold}
                  text="Noida"
                  color="#444B65"
                />
                          </View>
            </View>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate("OnboardingStack")}
            >
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
              <CustomTouchableOpacity isIcon onPress={()=>alert('')} >
                <Icons lib="FontAwesome" name="sliders" />
              </CustomTouchableOpacity>

              <CustomTouchableOpacity isIcon onPress={()=>alert('')} >

                <Icons
                  lib="FontAwesome"
                  name="heart-o"
                  style={{ marginHorizontal: 6 }}
                />
</CustomTouchableOpacity>

              <CustomTouchableOpacity isIcon onPress={()=>alert('')} >
                <Icons lib="FontAwesome" name="user-o" />
                </CustomTouchableOpacity>
              
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Animated.View>
                <Animated.View style={{flex:1,transform:[
              {translateY:headerTranslate}
            ]}} >

        <Container
          safeAreaColor={Colors.screenBG}
          showHeader={false}
          onScroll={e => scrollY.setValue(e.nativeEvent.contentOffset.y) }
          scrollEventThrottle={16}
        >
          <NoHorizontalMarginView
            verticalAlso
            style={{
              width: global.deviceWidth,
              padding: global.contentPadding,
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 0,
              flex: 1,
              backgroundColor: "#F8FAF9",
            }}
          >
            <NetworkAwareContent
              isApiCall={this.state.isApiCall}
              data={dummyTutors}
              showLottie
            >
              <CardSwiper
                setRef={(ref) => (this.caraousal = ref)}
                data={dummyTutors}
              />
            </NetworkAwareContent>
          </NoHorizontalMarginView>
        </Container>
        </Animated.View>

      </SafeAreaView>
    );
  }
}

const styles = {
  circle: {
    width: 55,
    height: 55,
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
};
export default Dashboard;
