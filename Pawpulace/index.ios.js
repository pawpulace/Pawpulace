import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
} from 'react-native';

import Login from './login';
/*import WelcomeBreeder from './welcomeBreeder';*/
import HomePage from './src/BreederRegistration/HomePage';
import WelcomePetParent from './welcomePetParent';
import LitterRegistration from './src/LitterCreation/LitterRegistration';
import UploadPicture from './src/Common/UploadPupPicComponent';
import PuppyDisplay from './PuppyDisplay';
import PuppyRegistration from './src/LitterCreation/PuppyRegistration';
import SelectLitter from './src/LitterCreation/SelectLitter';
import SearchBreederProfile from './src/ProfilePages/SearchBreeder';
import BreederProfilePage from './src/ProfilePages/BreederProfile';

export default class Pawpulace extends Component {
  render(){
    return (
      <Navigator
        initialRoute={{name: 'Login'}}
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
    if(route.name == 'UploadPicture') {
        return <UploadPicture navigator={navigator} />
    }
    if(route.name == 'SelectLitter') {
        return <SelectLitter navigator={navigator} />
    }
    if(route.name == 'SearchBreederProfile') {
        return <SearchBreederProfile navigator={navigator} />
    }
  }
}

AppRegistry.registerComponent('Pawpulace', () => Pawpulace);
