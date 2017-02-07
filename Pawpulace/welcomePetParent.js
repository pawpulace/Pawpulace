import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class WelcomePetParent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginBottom: 30,}}>
        <TouchableHighlight onPress={() => this._back()}>
          <Text>Back                            </Text>
        </TouchableHighlight>
        <Text>
          Welcome Pet Parent
        </Text>
        </View>
      </View>
    );
  }
  _back(){
   this.props.navigator.push({
     name: 'Login', // Matches route.name
   })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  welcome: {
    fontSize: 15,
    textAlign: 'left',
    margin: 20,
  },
});
