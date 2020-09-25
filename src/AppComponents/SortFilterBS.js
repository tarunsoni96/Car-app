import React, { Component } from "react";
import { Text, View } from "react-native";
import "Helpers/global";
import CustomText from "AppLevelComponents/UI/CustomText";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import RangeSlider from "rn-range-slider";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import Line from "Helpers/line";
import Icons from "AppLevelComponents/UI/Icons";

let defaultState = {
  rangeLow: 1000,
  rangeHigh: 6000,

  durationLow: 10,
  durationHigh: 30,
};
export default class SortFilterBS extends Component {
  state = {
    rangeLow: 1000,
    rangeHigh: 6000,

    durationLow: 10,
    durationHigh: 30,
  };

  resetState() {
    this.setState(defaultState);
  }

  componentWillMount(){
    defaultState = this.props.appliedFilters || defaultState 
    this.state = defaultState
  }

  apply() {
    if (JSON.stringify(defaultState) != JSON.stringify(this.state)) {
      this.props.applyFilter(this.state);
    } else {
      this.props.sheetCloser(this.state);
    }
  }

  render() {
    return (
      <View style={{ padding: global.contentPadding }}>

      <Icons lib='AntDesign' name='close' style={{alignSelf:'center',backgroundColor:'#eee',borderRadius:70,padding:4}} size={19} onPress={()=>this.props.sheetCloser()} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CustomText text="Filters" size={25} />
          {JSON.stringify(defaultState) != JSON.stringify(this.state) ? 
            <CustomButton
          press={() => this.apply()}
          btnStyle={{ borderRadius: 5,padding:5 }}
          text="Apply"
        />
          
          : null}
         


        </View>
        <Line />
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: { height: 2, width: 0 },
            shadowOpacity: 0.25,
            shadowRadius: 3,
            marginTop: 20,
            elevation: 3,
          }}
        >
          <CustomText
            text={`Fee`}
            style={{ position: "absolute", bottom: 0 }}
            size={23}
          />

          <RangeSlider
            style={{ width: "100%", height: 65 }}
            gravity={"top"}
            min={1000}
            max={6000}
            thumbColor={"#000"}
            labelBackgroundColor={Colors.accent}
            labelBorderColor={"#000"}
            labelTextColor={Colors.textPrimary}
            step={100}
            initialHighValue={this.state.rangeHigh}
            initialLowValue={this.state.rangeLow}
            selectionColor={Colors.accent}
            blankColor="#000"
            onValueChanged={(low, high, fromUser) => {
              this.setState({ rangeLow: low, rangeHigh: high });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 3,
          }}
        >
          <CustomText text={`${"\u20B9"}${this.state.rangeLow}`} />
          <CustomText text={`${"\u20B9"}${this.state.rangeHigh}`} />
        </View>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: { height: 2, width: 0 },
            shadowOpacity: 0.25,
            shadowRadius: 3,

            marginTop: 50,
            elevation: 3,
          }}
        >
          <CustomText
            text={`Duration`}
            style={{ position: "absolute", bottom: 0 }}
            size={23}
          />

          <RangeSlider
            style={{ width: "100%", height: 65 }}
            gravity={"top"}
            min={10}
            max={30}
            thumbColor={"#000"}
            labelBackgroundColor={Colors.accent}
            labelBorderColor={"#000"}
            labelTextColor={Colors.textPrimary}
            step={1}
            initialHighValue={this.state.durationHigh}
            initialLowValue={this.state.durationLow}
            selectionColor={Colors.accent}
            blankColor="#000"
            onValueChanged={(low, high, fromUser) => {
              this.setState({ durationLow: low, durationHigh: high });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 3,
            marginBottom: 10,
          }}
        >
          <CustomText text={`${this.state.durationLow} days`} />
          <CustomText text={`${this.state.durationHigh} days`} />
        </View>

          
      </View>
    );
  }
}
