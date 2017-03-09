/*********************************************************************************************
*
* Pawpulace CONFIDENTIAL
*
* NOTICE:  All information contained herein is, and remains the property of Pawpulace Incorporated
* and its suppliers, if any. The intellectual and technical concepts contained herein are proprietary
* to Pawpulace Incorporated. Dissemination of this information or reproduction of this material is
* strictly forbidden unless prior written permission is obtained from Pawpulace.
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
  View, TouchableOpacity, NativeModules, Dimensions,Alert,
} from 'react-native';

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

const BreederStyle = require('../../style/BreederStyleSheet');
const CommonStyles = require('../../style/commonStyles');

import TextField from 'react-native-md-textinput';
import CreatePuppyProfile from '../PuppyRegistration/CreatePuppyProfile';

import {CustomButton,CommonNavigator, DropDown, CustomDatePicker} from '../util';
import Realm from '../components/realm';

class LitterInformation extends Component {
  constructor(props) {
      super(props);
      this.state = {
        sire: '',
        dam: '',
        pupsAvailable: '',
        breedType: '',
      }
    }


  onChange(text) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if ( numbers.indexOf(text[i]) > -1 ) {
          newText = newText + text[i];
      }
    }
    this.setState({myNumber: newText})
  }

  _keyboardDidShow () {
    alert('Keyboard Shown');
  }

  _keyboardDidHide () {
    alert('Keyboard Hidden');
  }

  onPressNext() {
    this.props.navigator.push({
      component: CreatePuppyProfile,
      name: 'Welcome ' + this.state.sire,
      passProperty: {
        Sireinfo: this.state.sire,
      }
    })
  }

  onAddItem() {
    console.log('Realm fucking defaut: ' + Realm.objects('Litter').length);
    Realm.write(() => {
      Realm.create('Litter', {
        sire: this.state.sire,
        dam:   this.state.dam,
        breedType: this.state.breedType,
        numberOfPuppies: this.state.pupsAvailable,
      });
    });
    this.onPressNext();
  }

  render() {
  return(
     <View style = {BreederStyle.PageStyle.container}>
          <ScrollView contentContainerStyle={BreederStyle.PageStyle.container}>
              <TextField label={'Breed Type'}  onChangeText={(breedType) => this.setState({breedType})} value={this.state.breedType==' '?'':this.state.breedType}  highlightColor={'#00BCD4'} />
              <TextField label={'Sire'}  onChangeText={(sire) => this.setState({sire})} value={this.state.sire==' '?'':this.state.sire}  highlightColor={'#00BCD4'} />
              <TextField label={'Dam'}  onChangeText={(dam) => this.setState({dam})} value={this.state.dam==' '?'':this.state.dam} highlightColor={'#00BCD4'} />
              <TextField label={'Number of Pups Available?'}
                                onChangeText={(pupsAvailable) => this.setState({pupsAvailable})} value={this.state.pupsAvailable==' '?'':this.state.pupsAvailable}
                                highlightColor={'#00BCD4'}
                                keyboardType={'numeric'}
                                maxLength={2}
                                onSubmitEditing={Keyboard.dismiss}
                                /*onChangeText = {(text) => {this.onChange(text)}}
                                value = {this.state.myNumber} */
                                />
              <Text style={BreederStyle.TextStyle.titleText} >
                Please enter the puppy profiles on the next page
              </Text>
            </ScrollView>
            <CustomButton  navigator={this.props.navigator} onPress={() => {this.onAddItem()}} label='Next'/>
            </View>
          )
      }
}

export default class LitterRegistration extends React.Component {
  renderScene(route, navigator) {
      return <route.component navigator={navigator} {...route.passProperty} />
  }

  configureScene(route, routeStack) {
          return Navigator.SceneConfigs.PushFromRight
  }

  render() {
      return(
         /* <CommonNavigator component={BreederInformation} name='BreederInformation'/>*/
       <LitterInformation  navigator={this.props.navigator} />
      )
  }
}


module.exports =  LitterRegistration;
