import React, { Component } from "react";
import { TouchableOpacity, View, StatusBar, ScrollView } from "react-native";
import Container from "AppLevelComponents/UI/Container";
import { Colors } from "UIProps/Colors";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomText from "AppLevelComponents/UI/CustomText";
import Divider from "AppLevelComponents/UI/Divider";
import Header from "AppLevelComponents/UI/Header";
import Fonts from "UIProps/Fonts";
import ProfilePic from "AppLevelComponents/UI/ProfilePic";
import Constants from "Helpers/Constants";
import ProfileLabel from "./components/ProfileLabel";
import HelperMethods from 'Helpers/Methods'
import InfoItem from "./components/InfoItem";
import { Row, Grid, Col } from "react-native-easy-grid";
import Icons from "../../AppLevelComponents/UI/Icons";

export class Profile extends Component {
  state = {
  };

  render() {
    return (
      <Container headerTitle="Profile">
          
      </Container>
    );
  }
}

export default Profile;
