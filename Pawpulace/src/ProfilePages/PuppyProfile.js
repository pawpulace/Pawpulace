/*********************************************************************************************
*
* Pawpulace CONFIDENTIAL
*
* NOTICE:  All information contained herein is, and remains the property of Adobe Systems
* Incorporated and its suppliers, if any.  The intellectual and technical concepts contained
* herein are proprietary to Pawpulace Incorporated and its suppliers and may be covered
*by U.S. and Foreign Patents, patents in process, and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material is strictly forbidden unless
*prior written permission is obtained from Pawpulace.
****************************************************************************************/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  NavigatorIOS,
  Navigator,
  ScrollView,
  ListView,
  Text,
  Button,
  Image,
  Keyboard,
  TouchableHighlight,
  View, TouchableOpacity, NativeModules, Dimensions,Alert,AsyncStorage,
} from 'react-native';

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

const BreederStyle = require('../../style/BreederStyleSheet');
const CommonStyles = require('../../style/commonStyles');

import TextField from 'react-native-md-textinput';
import DatePicker from 'react-native-datepicker';
import CreatePuppyProfile from '../PuppyRegistration/CreatePuppyProfile';

import {CustomButton,CommonNavigator, DropDown, CustomDatePicker} from '../util';

export default class PuppyProfilePage extends React.Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProperty} />
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight
  }

  constructor(props) {
    super(props);
    this.state = {
      puppyName: props.PuppyName,
    };
  }

  componentWillMount () {
    this.props.navigator.push({
      component: PuppyPublicDisplay,
      passProperty: {
        PuppyName: this.state.puppyName,
      }
    })
  }

  render() {
    return (
      <PuppyPublicDisplay  navigator={this.props.navigator} />
    );
  }
}

module.exports = PuppyProfilePage;

class PuppyPublicDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puppyName: props.PuppyName,
      image: '',
      thankyouText: 'Coopers Profile',
    }
  }

 onPressNext(text) {
   if(text == 'Add') {
     this.props.navigator.push ({
       component: CreatePuppyProfile,
     })
   }
  }

  render() {
  return(
    <View style={BreederStyle.TextStyle.container}>
      <View style={{padding: 10}}>
        <Text style={BreederStyle.TextStyle.titleText} >
        {this.state.puppyName}
        </Text>
        <CustomButton  navigator={this.props.navigator} onPress={() => {this.onPressNext()}} label='Next'/>
      </View>
    </View>
    )
  };
}
