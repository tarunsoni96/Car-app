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

@observer
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.inputValObj = {};
    this.state = {
      isApiCall: false,
      showWhiteInput: true,

      scrollY: new Animated.Value(0),
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

  onPressLeft() {
    this.caraousal.snapToPrev();
  }

  onPressRight() {
    this.caraousal.snapToNext();
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: "clamp",
    });

    const headerFontSize = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [30, 20],
      extrapolate: "clamp",
    });


    return (
      <SafeAreaView style={{flex:1,}}>
        <Animated.View
          style={{
            backgroundColor: "#F8FAF9",
            // alignItems:'center',
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
              titleStyle={{ color: Colors.textPrimary,fontSize:26,fontFamily:Fonts.semiBold }}
              title="Schools."
              hideBack
            />
            <CustomText text="40 tutors nearby" size={19} marginTop={10} />
          </View>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate("OnboardingStack")}
            >
              <View style={{ alignItems: "center",flexDirection:'row',flex:1,justifyContent:'flex-end' }}>
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
            </TouchableWithoutFeedback>
          </View>
        </Animated.View>

        <Container
          safeAreaColor={Colors.screenBG}
          showHeader={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY,
                },
              },
            },
          ])}
          scrollEventThrottle={16}
        >
          <NoHorizontalMarginView
          verticalAlso

            style={{ width:global.deviceWidth,padding:global.contentPadding,paddingBottom:0,backgroundColor:'#F8FAF9' }}
          >
            <CardSwiper
              setRef={(ref) => (this.caraousal = ref)}
              data={dummyTutors}
            />
          </NoHorizontalMarginView>
        </Container>
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
