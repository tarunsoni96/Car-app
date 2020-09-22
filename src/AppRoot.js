import React, { Component, Fragment } from "react";
import { Text, View, StatusBar, Image, Keyboard } from "react-native";
import { Colors } from "UIProps/Colors";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icons from "AppLevelComponents/UI/Icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import "Helpers/global";
import {
  createFluidNavigator,
  Transition as fluidTransition,
  FluidNavigator,
} from "react-navigation-fluid-transitions";
import EStyleSheet from "react-native-extended-stylesheet";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";
import {
  zoomIn,
  fromBottom,
  fromLeft,
  fromRight,
} from "react-navigation-transitions";
import Login from "Screens/Login/Login";
import ForgotPassword from "Screens/ForgotPassword/ForgotPassword";
import ResetPassword from "Screens/ResetPassword/ResetPassword";
import Shopping from "Screens/Shopping/Shopping";
import Summary from "Screens/Summary/Summary";
import DashboardDesign from "Screens/Dashboard/Dashboard";
import MobileScreen from "Screens/Onboarding/Onboarding";
import OnboardingOTP from "Screens/Onboarding/OnboardingOTP";
import OnboardingUserSelection from "Screens/Onboarding/OnboardingUserSelection";
import CustomText from "AppLevelComponents/UI/CustomText";
import Fonts from "UIProps/Fonts";
import Profile from "Screens/Profile/Profile";
import logoSvg from 'assets/img/logoSvg.svg'
import SvgUri from "react-native-svg-uri";

let transitionSpeed = 650;
let tabIconSize = 27;

let svgSize = 26;
let activeColor = Colors.accent;
let inactiveColor = "#777F9C";
let colors = { dash: { color: activeColor } };

const transitionConfig = {
  duration: 500,
};

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  // Custom transitions here..
  if (
    prevScene &&
    prevScene.route.routeName === "Noticeboard" &&
    nextScene.route.routeName === "iCard"
  ) {
    return zoomIn(transitionSpeed);
  } else if (
    prevScene &&
    prevScene.route.routeName === "Noticeboard" &&
    nextScene.route.routeName === "Profile"
  ) {
    return null;
  }
  return fromRight(transitionSpeed);
};

const LoginStack = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },

    forgotPassword: {
      screen: ForgotPassword,
    },

    resetPassword: {
      screen: ResetPassword,
    },
  },
  {
    // initialRouteName:'resetPassword',
    headerMode: "none",
  }
);

const OnboardingStack = createStackNavigator(
  {
    MobileScreen,
  },
  {
    headerMode: "none",
    transitionConfig: (nav) => handleCustomTransition(nav),
  }
);

const DashboardStack = createStackNavigator(
  {
    DashboardDesign,
  },
  {
    headerMode: "none",
    transitionConfig: (nav) => handleCustomTransition(nav),
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile,
  },
  {
    headerMode: "none",
    transitionConfig: (nav) => handleCustomTransition(nav),
  }
);

const ShortlistStack = createStackNavigator(
  {
    Profile,
  },
  {
    headerMode: "none",
    transitionConfig: (nav) => handleCustomTransition(nav),
  }
);


const TopLevelNavigator = createAnimatedSwitchNavigator(
  {
    DashboardStack,
    LoginStack,
  },
  {
    //The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-top"
          durationMs={500}
          interpolation="easeIn"
        />
        <Transition.In type="slide-top" durationMs={transitionSpeed} />
      </Transition.Together>
    )
  }
);

// const InsideApp = createMaterialBottomTabNavigator(
//   {
//     Shortlist: {
//       screen: ShortlistStack,
//       navigationOptions: {
//         tabBarLabel: (
//           <CustomText
//             text="Shortlist"
//             color={colors["shortlist"]?.color || inactiveColor}
//             size={15}
//             font={colors["shortlist"]?.color ? Fonts.bold : Fonts.semiBold}
//           />
//         ),

//         tabBarOnPress: () => {
//           Keyboard.dismiss();
//           colors = [];
//           colors["shortlist"] = { color: activeColor };
//         },
//         tabBarIcon: () => (
//           <View>
//                     <Icons lib="AntDesign" name="hearto" />
            

//             {/* <SvgUri
//             width={svgSize}
//             fill={colors['dash']?.color || inactiveColor}
//             height={svgSize}
//             svgXmlData={compass}
//           /> */}
//           </View>
//         ),
//       },
//     },

//     Dashboard: {
//       screen: DashboardStack,
//       navigationOptions: {
//         tabBarLabel: (
//           <CustomText
//             text="Schools"
//             color={Colors.textPrimary || inactiveColor}
//             size={15}
//             font={colors["dash"]?.color ? Fonts.bold : Fonts.semiBold}
//           />
//         ),

//         tabBarOnPress: () => {
//           Keyboard.dismiss();
//           colors = [];
//           colors["dash"] = { color: activeColor };
//         },
//         tabBarIcon: () => (
//           <View>
//             {/* <Image
//               source={require("assets/img/tutorsActive.png")}
//               style={{ width: tabIconSize, height: tabIconSize }}
//               resizeMode="contain"
//             /> */}

//             <SvgUri
//             width={svgSize}
//             fill={colors['dash']?.color || inactiveColor}
//             height={svgSize}
//             svgXmlData={logoSvg}
//           />
//           </View>
//         ),
//       },
//     },

//     Profile: {
//       screen: ProfileStack,
//       navigationOptions: {
//         tabBarLabel: (
//           <CustomText
//             text="Profile"
//             color={colors["profile"]?.color || inactiveColor}
//             size={15}
//             font={colors["profile"]?.color ? Fonts.bold : Fonts.semiBold}
//           />
//         ),
//         tabBarOnPress: () => {
//           Keyboard.dismiss();
//           colors = [];
//           colors["profile"] = { color: activeColor };
//         },
//         tabBarIcon: () => (
//           <View>
//             <Image
//               source={require("assets/img/tabProfile.png")}
//               style={{ width: tabIconSize, height: tabIconSize }}
//               resizeMode="contain"
//             />
//           </View>
//         ),
//       },
//     },
//   },
//   {
//     initialRouteName: "Dashboard",
    
//     tabBarOptions: {
//     },
//     barStyle: {
//       backgroundColor: "#fff",
//       paddingVertical: 20,
//     },
//   }
// );

// const switcher = createAnimatedSwitchNavigator(
//   {
//     InsideApp,
//     OnboardingStack,
//   },
//   {
//     transition: (
//       <Transition.Together>
//         <Transition.Out
//           type="slide-top"
//           durationMs={500}
//           interpolation="easeIn"
//         />
//         <Transition.In type="slide-top" durationMs={transitionSpeed} />
//       </Transition.Together>
//     ),
//   }
// );

const AppContainer = createAppContainer(TopLevelNavigator);

export default class AppRoot extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <AppContainer />
        </View>
      </>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};
