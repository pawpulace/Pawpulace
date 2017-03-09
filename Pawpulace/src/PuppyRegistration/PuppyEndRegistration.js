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
import PuppyLitter from './PuppyLitter';
import CreatePuppyProfile from './CreatePuppyProfile';

import {CustomButton,CommonNavigator, DropDown, CustomDatePicker} from '../util';

export default class LitterConfirmation extends React.Component {
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
      component: PuppyEndRegistration,
      passProperty: {
        PuppyName: this.state.puppyName,
      }
    })
  }

  render() {
    return(
      <PuppyEndRegistration  navigator={this.props.navigator} />
    )
  }
}

module.exports = LitterConfirmation;

class PuppyEndRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puppyName: props.PuppyName,
      thankyouText: ' Your puppy is now registered with Pawpulace',
      bodyText: 'You can register more puppies by clicking the add button or press next to view the Litter page.'
    }
  }

 onPressNext(text) {
   if(text == 'Add') {
     this.props.navigator.push ({
       component: CreatePuppyProfile,
     })
   }
   else {
     this.props.navigator.push ({
       component: PuppyLitter,
       PuppyName: this.state.puppyName,
       passProperty: {
         PuppyName: this.state.puppyName,
       }
     })
   }
  }

  render() {
  return(
    <View style={BreederStyle.TextStyle.container}>
      <View style={{padding: 10}}>
        <Text style={BreederStyle.TextStyle.titleText} >
        {this.state.thankyouText}
        </Text>
        <Text style={BreederStyle.TextStyle.bodyText}>
        {this.state.bodyText}
        </Text>
        <CustomButton  navigator={this.props.navigator} onPress={() => {this.onPressNext('Add')}} label='Add'/>
        <CustomButton  navigator={this.props.navigator} onPress={() => {this.onPressNext('Next')}} label='Next'/>
      </View>
    </View>
    )
  };
}
