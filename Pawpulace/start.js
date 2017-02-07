import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Item,
  Navigator,
} from 'react-native';

import Pawpulace from './login';

export default class Pawpulace extends Component {
  render() {
    return (
      return (
      <Navigator
        initialRoute={{name: 'LitterRegistration'}}
        renderScene={this.renderScene}
      />
    )
  }
  renderScene(route, navigator) {
    if(route.name == ''){
      <Pawpulace navigator={navigator} />
    }
  }
}

AppRegistry.registerComponent('Pawpulace', () => Pawpulace);
