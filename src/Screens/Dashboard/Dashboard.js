import React, { Component } from "react";
import { Image, View } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import Fonts from "UIProps/Fonts";
import NetworkAwareContent from "AppLevelComponents/UI/NetworkAwareContent";
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
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isApiCall: false,
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
        onBackPress={this.onBackPress}
        showHeader={false}
        contentStyle={{ backgroundColor: "#FAFAFF" }}
      >
        <NoHorizontalMarginView verticalAlso style={{}}>
          <ImageBackground
            source={require("assets/img/carimg.png")}
            style={{
              width: global.deviceWidth,
              height: widthPercentageToDP(70),
              marginTop: 0,
              padding: global.contentPadding,
            }}
            resizeMode="cover"
          >
            <CustomText text="Welcome to" />
            <CustomText text="Driving School" size={35} font={Fonts.heavy} />
          </ImageBackground>
        </NoHorizontalMarginView>

        <View style={{ marginTop: 70, flex: 1 }}>
          <FirstName />
          <CustomButton text="Get Started" gradColor='#6C63FF' onPress={()=>this.props.navigation.navigate('DashboardDesign2')} containerStyle={{ marginTop: 30 }} />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomText
            text="Have an account?"
            style={{ alignSelf: "center", marginBottom: 40 }}
          />
          <CustomText
            text=" Log In"
            style={{ color: "#6C63FF", marginBottom: 40 }}
          />
        </View>
      </Container>
    );
  }
}

export default Dashboard;
