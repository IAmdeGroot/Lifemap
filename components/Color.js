import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';


class Color extends Component {
  render() {
    return(
      <View>
      <TouchableOpacity
      style={{...colorStyle, backgroundColor: this.props.backColor}}
      onPress={this.props.onPress}
      />
      </View>
    );
  }
}

const colorStyle = {
  width: 40,
  height: 40,
  borderWidth: 1,
  borderColor: '#C9C9C9',
  borderRadius: 25,
  margin: 2

}

export default Color;
