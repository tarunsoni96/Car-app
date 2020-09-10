import React, { Component } from "react";
import { Text, View,Image } from "react-native";
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
    const {item} = this.props
    return (
      <View
        style={{
          width: 270,
          height: 450,
          backgroundColor: "#fff",
          borderRadius: borderRad,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { height: 1, width: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 10,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.accent,
            borderRadius: borderRad,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
        <View style={{justifyContent:'flex-end'}} >

          <View style={{ flexDirection: "row", alignItems: "center",justifyContent:'space-around'}} >
            <Image source={{uri:item.userImage}} style={{width:100,height:150}} resizeMode='cover' />
            <Image source={item.carImage} style={{width:180,height:150,}} resizeMode='cover' />
            
          </View>
        </View>
        </View>

        <View style={{ flex: 1,padding:20 }} >
            <CustomText text={item.instituteName} color={Colors.textDark} font={Fonts.heavy} style={{fontSize:25}} />
        </View>
      </View>
    );
  }
}

export default CardDeckItem;
