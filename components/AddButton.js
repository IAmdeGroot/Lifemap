import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';


class AddButton extends Component {
  render() {
    return(
      <View>
      <TouchableOpacity style={addButtonStyle} onPress={this.props.onPress}>
      <Image source={require('../img/graycross.png')} />
      </TouchableOpacity>
      </View>
    );
  }
}

const addButtonStyle = {
  backgroundColor: '#FFF',
  borderWidth: 1,
  borderRadius: 100,
  borderColor: '#C9C9C9',
  alignItems: 'center',
  justifyContent: 'center',
  width: 80,
  height: 80,

}

export default AddButton;
