import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EditPage from './components/EditPage.js';
import HomePage from './components/HomePage.js';
import Footer from './components/Footer.js';


export default class App extends React.Component {
  state = {

    showColorPicker: false,
    moveDragables: false,
    showHomePage: true,
  }
  render() {
    return (
      <View style={styles.container}>
      <EditPage
      showColorPicker={this.state.showColorPicker}
      showDragables={this.state.moveDragables}
      moveDragables={this.state.moveDragables}
      />
      <Footer
      onPressToEdit={this.renderEditpage}
      onPressToHomepage={this.renderHomepage}
      showHomePage={this.state.showHomePage}
      />
      </View>
    );
  }

renderEditpage = () => {
  this.setState({moveDragables: true})
  this.setState({showColorPicker: true});
  this.setState({showHomePage: false});
}

renderHomepage = () => {
  this.setState({moveDragables: false})
  this.setState({showColorPicker: false});
  this.setState({showHomePage: true});
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
