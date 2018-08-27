import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorPicker from './ColorPicker.js';
import Dragable from './Dragable.js';


class EditPage extends Component {
  state = {
    dragables: [],
  }
  render() {
    return (
      <View style={editPageStyle}>
      {this.state.dragables}
      <ColorPicker
       onPressBlue={this.toggleDragableBlue}
       onPressRed={this.toggleDragableRed}
       onPressYellow={this.toggleDragableYellow}
       onPressGreen={this.toggleDragableGreen}
       onPressPurple={this.toggleDragablePurple}
       />
      </View>
    );
  }

  toggleDragableRed = () => {
  this.setState({dragables: [...this.state.dragables, <Dragable dragableColor={'#FFABAB'} />]})
  }

  toggleDragableBlue = () => {
  this.setState({dragables: [...this.state.dragables, <Dragable dragableColor={'#6EB5FF'} />]})
  }

  toggleDragableYellow = () => {
  this.setState({dragables: [...this.state.dragables, <Dragable dragableColor={'#FFF5BA'} />]})
  }

  toggleDragableGreen = () => {
  this.setState({dragables: [...this.state.dragables, <Dragable dragableColor={'#BFFCC6'} />]})
  }

  toggleDragablePurple = () => {
  this.setState({dragables: [...this.state.dragables, <Dragable dragableColor={'#D5AAFF'} />]})
  }
}

const editPageStyle = {
  flex: 1,
  backgroundColor: '#FFF',
}

const dragableContainer = {
  borderWidth: 1,
  borderColor: '#C9C9B7',
  width: 220,
  marginTop: '100%',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
}

export default EditPage;
