import React, { Component } from "react";
import { Text, View, Animated,TouchableOpacity } from "react-native";
import "Helpers/global";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import HelperMethods from "Helpers/Methods";
import Loader from "./Loader";
import { withNavigation } from "react-navigation";
import CustomText from "./CustomText";
class CustomBottomSheet extends Component {
  constructor(props) {
    super(props);

    this._deltaY = new Animated.Value(-200);
  }

  componentDidMount() {
    this.props.onRef(this);
    // this.open()
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  open() {
    this.RBSheet.open();
  }
  
  close(){
    this.RBSheet.close();
  }
  render() {
    let customH = 0
    const { height,hideSave,duration,headerBtnStyle,saveText,cancelText,cancelColor } = this.props;

    if(HelperMethods.isPlatformIos()){
      customH = duration ? (HelperMethods.isIphoneXorAbove() ? widthPercentageToDP(100) : widthPercentageToDP(110)) : widthPercentageToDP(height)
    } else {
      customH = widthPercentageToDP(duration ? 55 : height)
    }
    return (
      <RBSheet
        ref={(ref) => {
          this.RBSheet = ref;
        }}
        openDuration={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
      >
      {hideSave ? 
      null
      :
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: global.contentPadding,
            justifyContent: "space-between",
            ...headerBtnStyle
          }}
        >
          <SaveButton
            onPress={() => this.RBSheet.close()}
            text={cancelText || "Cancel"}
            color={cancelColor || "#212121"}
          />

          <View style={{paddingHorizontal:8}} />
          <SaveButton text={saveText || undefined} onPress={() => this.RBSheet.close()} />
        </View>
      }

      <View>

        {this.props.children}
      </View>
      </RBSheet>
    );
  }
}


class SaveButton extends Component {
  render() {
      const {text,onPress,color,style,disabled,isApiCall} = this.props

      return (
          <TouchableOpacity style={style} onPress={(onPress && !disabled) ? ()=> onPress() : null} >
              {isApiCall ?
              <Loader size='small' />
              :
              <CustomText text={text || 'Save'} color={color || disabled ? Colors.textGrey : Colors.accent } size={14}  />
              }
            </TouchableOpacity>
      )
  }
}

export default withNavigation(CustomBottomSheet)