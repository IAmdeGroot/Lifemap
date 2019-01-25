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
      {this.renderTint()}
      {this.renderColorPicker()}
      </View>
    );
  }

  renderColorPicker = () => {
    if (this.props.showColorPicker == true) {
      return(
        <ColorPicker
         onPressBlue={this.toggleDragableBlue}
         onPressRed={this.toggleDragableRed}
         onPressYellow={this.toggleDragableYellow}
         onPressGreen={this.toggleDragableGreen}
         onPressPurple={this.toggleDragablePurple}
         />
      );
    } else {
      return null;
    }
  }

renderTint = () => {
  if (this.props.moveDragables == false) {
    return(
      <View style={tintOverlay}>
      </View>
    );
}
}

  toggleDragableRed = () => {
  this.setState({dragables: [...this.state.dragables,
    <Dragable key={this.state.dragables.length+1}
    dragableColor={'#FFABAB'} moveAble={this.props.moveDragables} />]})
  }

  toggleDragableBlue = () => {
  this.setState({dragables: [...this.state.dragables,
     <Dragable key={this.state.dragables.length+1}
     dragableColor={'#6EB5FF'} moveAble={this.props.moveDragables}  />]})
  }

  toggleDragableYellow = () => {
  this.setState({dragables: [...this.state.dragables,
     <Dragable key={this.state.dragables.length+1}
     dragableColor={'#FFF5BA'} moveAble={this.props.moveDragables}  />]})
  }

  toggleDragableGreen = () => {
  this.setState({dragables: [...this.state.dragables,
     <Dragable key={this.state.dragables.length+1}
     dragableColor={'#BFFCC6'} moveAble={this.props.moveDragables}  />]})
  }

  toggleDragablePurple = () => {
  this.setState({dragables: [...this.state.dragables,
     <Dragable key={this.state.dragables.length+1}
      dragableColor={'#D5AAFF'} moveAble={this.props.moveDragables}  />]})
  }
}


const editPageStyle = {
  flex: 1,
  backgroundColor: '#FFF',
}

const tintOverlay = {
  flex: 1,
  backgroundColor: 'transparent',
  opacity: 0,
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
