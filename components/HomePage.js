import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorPicker from './ColorPicker.js';
import EditPage from './EditPage.js';

class HomePage extends Component {
  render() {
    return (
      <View style={homeStyle}>
      <Text style={textStyle}> HOMEPAGE</Text>

      </View>
    );
  }
}

const homeStyle = {
  flex: 1,
  backgroundColor: 'blue',
  alignItems: 'center',
  justifyContent: 'center',


}

const textStyle = {
  
  fontSize: 44,
}

export default HomePage;
