import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Color from './Color.js';


class ColorPicker extends Component {

  render() {
    return(

      <View style={colorPickerStyle}>
      <Color backColor={'#6EB5FF'}   onPress={this.props.onPressBlue} />
      <Color backColor={'#FFABAB'}    onPress={this.props.onPressRed} />
      <Color backColor={'#FFF5BA'} onPress={this.props.onPressYellow} />
      <Color backColor={'#BFFCC6'}  onPress={this.props.onPressGreen} />
      <Color backColor={'#D5AAFF'} onPress={this.props.onPressPurple} />
      </View>

    );
  }
}

const colorPickerStyle = {
  //borderWidth: 1,
  flexDirection: 'row',
  height: 40,
  width: '100%',
  //justifyContent: 'center',
  alignItems: 'center',
  marginTop: 'auto',
  marginBottom: 3

}

export default ColorPicker;
