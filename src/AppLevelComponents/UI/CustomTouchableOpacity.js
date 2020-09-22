import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export default class CustomTouchableOpacity extends Component {
  render() {
    const {isIcon,onPress} = this.props
    return (
      <TouchableOpacity onPress={onPress} style={isIcon ? {padding:7,alignItems:'center',justifyContent:'center'} : {}} >
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
