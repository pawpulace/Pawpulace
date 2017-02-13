import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
} from 'react-native';

import Login from './login';
/*import WelcomeBreeder from './welcomeBreeder';*/
import HomePage from './src/HomePage';
import WelcomePetParent from './welcomePetParent';
import LitterRegistration from './LitterRegistration';
import PuppyProfile from './PuppyProfile';
import UploadPicture from './uploadPic';
import PuppyDescripton from './PuppyDescription';
import PuppyDisplay from './PuppyDisplay';
import PuppyRegistration from './src/PuppyRegistration/PuppyRegistration';

export default class Pawpulace extends Component {
  render(){
    return (
      <Navigator
        initialRoute={{name: 'PuppyRegistration'}}
        renderScene={this.renderScene}
      />
    )
  }
  renderScene(route, navigator) {
    if(route.name == 'Login') {
        return <Login navigator={navigator} />
    }
    if(route.name == 'WelcomeBreeder') {
        return <HomePage navigator={navigator} />
    }
    if(route.name == 'WelcomePetParent') {
        return <WelcomePetParent navigator={navigator} />
    }
    if(route.name == 'PuppyRegistration') {
        return <PuppyRegistration navigator={navigator} />
    }
  }
}

AppRegistry.registerComponent('Pawpulace', () => Pawpulace);
