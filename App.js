import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EditPage from './components/EditPage.js';
import HomePage from './components/HomePage.js';
import Footer from './components/Footer.js';


export default class App extends React.Component {
  state = {
    viewHomepage: true,
    viewEditpage: false,
  }
  render() {
    return (
      <View style={styles.container}>
      {this.renderPage()}
      <Footer
      onPressToEdit={this.renderEditpage}
      onPressToHomepage={this.renderHomepage}
      homePageState={this.state.viewHomepage}
      editPageState={this.state.viewEditpage}
      />
      </View>
    );
  }

renderEditpage = () => {
  this.setState({viewHomepage: false});
  this.setState({viewEditpage: true});
}

renderHomepage = () => {
  this.setState({viewEditpage: false});
  this.setState({viewHomepage: true});
}

renderPage = () => {
  if (this.state.viewEditpage == true) {
    return (<EditPage />);
  }
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
