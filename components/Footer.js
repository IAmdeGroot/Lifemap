import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AddButton from './AddButton.js';

class Footer extends Component {
  render() {
    return(
      <View style={footerStyle}>
      {this.renderAddButton()}
      </View>
    );
  }
  renderAddButton = () => {
    if (this.props.showHomePage == true) {
      return <AddButton onPress={this.props.onPressToEdit} />
    } else {
      return <AddButton onPress={this.props.onPressToHomepage} />
    }
  }
}



const footerStyle = {
  width: '100%',
  height: 90,
  marginTop: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#C9C9C9',

}

export default Footer;
