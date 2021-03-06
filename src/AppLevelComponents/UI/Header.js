import React, { Component } from "react";
import { StyleSheet,TouchableOpacity, View, ImageBackground } from "react-native";
import Container from "AppLevelComponents/UI/Container";
import NoHorizontalMarginView from "AppLevelComponents/UI/NoHorizontalMarginView";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import CustomText from "AppLevelComponents/UI/CustomText";
import Fonts from "UIProps/Fonts";
import SvgButton from "AppLevelComponents/UI/SvgButton";
import backBtn from "assets/svgIcons/back.svg";

import { withNavigation } from "react-navigation";
import Icons from "AppLevelComponents/UI/Icons";

class Header extends Component {
  render() {
    let commonVal = widthPercentageToDP(80);
    const {
      x,
      hideBG = true,
      back,
      hideBack,
      headerContainerStyle,
      hideTitle,
      subtitleAppender,
      title,
      subTitle,
      titleStyle,
      marginBottom,
      onBack
    } = this.props;
    return (
      <NoHorizontalMarginView verticalAlso>
        <View
          style={{
            marginBottom: hideBG ? widthPercentageToDP(2)  :  marginBottom || widthPercentageToDP(63),
          }}
        >
          <ImageBackground
            style={{
              width: "100%",
              paddingTop:global.contentPadding,
              paddingHorizontal: global.contentPadding- 5,
              ...headerContainerStyle,
            }}
            source={!hideBG && require("assets/img/headerBG.png")}
          >
        
            <View style={styles.headerTop}>
            {!hideBack ? 
                    
              <TouchableOpacity style={{alignItems:'center',justifyContent:'center',}}  onPress={() => onBack ? onBack() : this.props.navigation.pop()}>

                  <Icons
                    lib="Entypo"
                    color="#040714"
                    size={33}
                    name={"chevron-left"}
                  />
              </TouchableOpacity>
                  :null
            }
            </View>

            {!hideTitle && (
              <CustomText
                // font={Fonts.semiBold}
                text={title || "Header Title"}
                style={{
                  marginTop:12,
                  margin:9,
                  fontFamily:Fonts.semiBold,
                  color: "#040714",
                  fontSize: 26,
                  ...titleStyle,

                }}
              />
            )}
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {subTitle && (
                <CustomText
                  font={Fonts.regular}
                  text={subTitle || "Subtitle here"}
                  style={{
                    marginRight: subtitleAppender ? 8 : 14,
                    marginTop: 13,
                    color: "#9E9E9E",
                    marginLeft:2,
                    lineHeight: 23,
                    fontSize: widthPercentageToDP(4),
                  }}
                />
              )}

              {typeof subtitleAppender == 'string' ? (
                <CustomText
                  font={Fonts.regular}
                  text={subtitleAppender}
                  style={{
                    // marginHorizontal: 14,

                    marginTop: 10,
                    color: "#424242",
                    fontSize: widthPercentageToDP(4),
                  }}
                />
              ) 
              :
              subtitleAppender
              }
            </View>

           
          </ImageBackground>

          
        </View>
        
      </NoHorizontalMarginView>
    );
  }
}

const styles = StyleSheet.create({
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default withNavigation(Header);
