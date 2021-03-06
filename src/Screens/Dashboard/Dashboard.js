import React, { Component } from "react";
import { Image, Animated, View } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import Fonts from "UIProps/Fonts";
import NetworkAwareContent from "AppLevelComponents/UI/NetworkAwareContent";
import LinearGradient from "react-native-linear-gradient";
import "Helpers/global";
import HelperMethods from "../../Helpers/Methods";
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
import CustomBottomSheet from "AppLevelComponents/UI/CustomBottomSheet";
import SortFilterBS from "AppComponents/SortFilterBS";
const HEADER_MIN_HEIGHT = 0;
const HEADER_MAX_HEIGHT = 130;

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
    this.scrollYAnimatedValue = new Animated.Value(0);
    this.scrollDiffClamp = new Animated.diffClamp(this.scrollYAnimatedValue,HEADER_MIN_HEIGHT,HEADER_MAX_HEIGHT)
      

    this.inputValObj = {};
    this.state = {
      getHeight:false,
      isApiCall: true,
      showWhiteInput: true,
    };
  }

  onBackPress = () => {
    HelperMethods.appExitPrompter();
  };

  componentDidMount() {
   this.fetchData()
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

  openFilters(){
    this.rfSheetDuration.open()
    this.setState({getHeight:true,},()=>this.setState({getHeight:true,}))
  }

  fetchData(appliedFilters){
    
    this.rfSheetDuration.close()
    setTimeout(() => {
      this.setState({isApiCall:true,appliedFilters})
    }, 800);
    setTimeout(() => {
      this.setState({ isApiCall: false,appliedFilters });
    }, 1000);
  }

  render() {
    const headerHeight = this.scrollDiffClamp.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp",
    });

    const headerPadding = this.scrollDiffClamp.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [global.contentPadding, 0],
      extrapolate: "clamp",
      
    });

    const headerShadow = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0, 40],
      extrapolate: "clamp",
      
    });

    const headerBorder = this.scrollDiffClamp.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [20, 0],
      extrapolate: "clamp",
      
    });

    return (
      <SafeAreaView style={{ flex: 1,backgroundColor:'#F8FAF9' }}>
        <Container
          safeAreaColor={Colors.screenBG}
          showHeader={false}
          bounces={false}
          scrollEventThrottle={8}
          contentContainerStyle={{
            paddingTop: HEADER_MAX_HEIGHT,
            alignItems: "center",
          }}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } },
            },
          ])}
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

        <Animated.View
          style={{
            backgroundColor: "#F8FAF9",
            height: headerHeight,
            width: "100%",
            justifyContent: "center",
            padding: headerPadding,
            position: "absolute",
            left: 0,
            right: 0,
            borderBottomLeftRadius: headerBorder,
            borderBottomRightRadius:headerBorder,
            elevation:headerShadow,
            opacity:headerHeight,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width:'100%',
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Header
                titleStyle={{
                  color: Colors.textPrimary,
                  fontSize: 26,
                  margin:5,
                  marginBottom:0,
                  fontFamily: Fonts.semiBold,
                }}
                title="Tutors"
                hideBack
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: -5,
                  marginTop: 14,
                }}
              >
                <Image
                  source={require("assets/img/location.png")}
                  style={{ width: 30, height: 30 }}
                  resizeMode="contain"
                />
                <CustomText
                onPress={()=>this.props.navigation.navigate('OnboardingStack')}
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
                <CustomTouchableOpacity isIcon onPress={() => this.openFilters()}>
                  <Icons lib="FontAwesome" name="sliders" />
                </CustomTouchableOpacity>

                <CustomTouchableOpacity isIcon onPress={() => this.props.navigation.navigate('Shortlists') }>
                
                  <Icons
                    lib="FontAwesome"
                    name="heart-o"
                    style={{ marginHorizontal: 6 }}
                  />
                  <View style={[styles.circle,{elevation:2,shadowColor: "#000",
                      shadowOffset: { height: 1, width: 0 },
                      shadowOpacity: 0.15,
                      shadowRadius: 2,position:'absolute',top:0,right:3,backgroundColor:Colors.accent,width:20,height:20}]} >
                  <CustomText text={'3'} />
                </View>
                </CustomTouchableOpacity>

                <CustomTouchableOpacity isIcon onPress={() => this.props.navigation.navigate("Profile") }>
                  <Icons lib="FontAwesome" name="user-o" />
                </CustomTouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Animated.View>

        <CustomBottomSheet
          // hideSave
          closeOnDrag={this.state.closeOnDrag}
          onRef={(ref) => (this.rfSheetDuration = ref)}
        >
          <SortFilterBS enableDragDown={()=>this.setState({closeOnDrag:true})} disableDragDown={()=>this.setState({closeOnDrag:false})} appliedFilters={this.state.appliedFilters} applyFilter={(state)=>this.fetchData(state)}  sheetCloser={(state)=>{ this.setState({appliedFilters:state}); this.rfSheetDuration.close(state);}} />
        </CustomBottomSheet>


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
