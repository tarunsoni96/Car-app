import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import Container from 'AppLevelComponents/UI/Container';
import Logo from 'AppLevelComponents/UI/Logo';
import Header from "AppLevelComponents/UI/Header";
import {Colors} from 'UIProps/Colors';
import Constants from 'Helpers/Constants'
import {personaContainer} from 'UIProps/Styles';
import HelperMethods from 'Helpers/Methods'
import CustomText from 'AppLevelComponents/UI/CustomText';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomButton from 'AppLevelComponents/UI/CustomButton';
import Divider from 'AppLevelComponents/UI/Divider';
import Fonts from 'UIProps/Fonts';
import Email from 'AppLevelComponents/UI/FormInputs/Email';
import {forgotPassSendMail} from 'ServiceProviders/ApiCaller';
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";
let valObj = {
  email: '',
};

class ForgotPassword extends Component {
  state = {
    isApiCall: undefined,
  };

  

      
  render() {
    return (
      <Container headerTitle="s">
          
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: '100%',
  $rem: global.rem,

  subContainer: {
    alignItems: 'center',
  },
});

export default withNavigation(ForgotPassword);
