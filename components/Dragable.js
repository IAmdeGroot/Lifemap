import React, { Component } from 'react';
import { View, TouchableOpacity, PanResponder, Animated, Text, TextInput, Alert } from 'react-native';
import Gestures from 'react-native-easy-gestures';

class Dragable extends Component {

  state = {
    pan: new Animated.ValueXY(),
    scale: new Animated.Value(1)
  }

  // STULEN KOD -->
  componentWillMount() {
    this.state.pan.setValue({x: 65, y: 420});
  this._panResponder = PanResponder.create({

    onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,

    onPanResponderGrant: (e, gestureState) => {
      this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
      this.state.pan.setValue({x: 0, y: 0});
      Animated.spring(
        this.state.scale,
        { toValue: 1.2, friction: 3 }
      ).start();
    },

    onPanResponderMove: Animated.event([
      null, {dx: this.state.pan.x, dy: this.state.pan.y},
    ]),

    onPanResponderRelease: (e, {vx, vy}) => {
      this.state.pan.flattenOffset();
      Animated.spring(
        this.state.scale,
        { toValue: 1, friction: 3 }
      ).start();
    }
  });
}

  render() {
    let { pan } = this.state;
    let [translateX, translateY] = [pan.x, pan.y];
    let rotate = '0deg';
    let scale = this.state.scale


    return(
        <Animated.View
        {...this._panResponder.panHandlers}
        style={{...dragableObj,
       backgroundColor: this.props.dragableColor,
       transform: [{translateX}, {translateY}, {rotate}, {scale}]}}
       onPress={this._onLongPressButton}
        >
        <TextInput style={{height: 0, width: 0, justifyContent:'center', alignItems:'center', borderColor: 'transparent', borderWidth: 0}}> </TextInput>
        </Animated.View>
    );
  }
}

const dragableObj = {
  width: 90,
  height: 90,
  backgroundColor: 'blue',
  position: 'absolute',
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
}

export default Dragable;
