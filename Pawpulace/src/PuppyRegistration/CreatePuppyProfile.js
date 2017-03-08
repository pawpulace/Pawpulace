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
  View, TouchableOpacity, NativeModules, Dimensions,Alert,
} from 'react-native';

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

const BreederStyle = require('../../style/BreederStyleSheet');
const CommonStyles = require('../../style/commonStyles');

import TextField from 'react-native-md-textinput';
import DatePicker from 'react-native-datepicker';
import Video from 'react-native-video';
var ImagePicker = NativeModules.ImageCropPicker;
import UploadPicture from '../Common/UploadPupPicComponent';
import PuppyLitter from './PuppyLitter';

import {CustomButton,CommonNavigator, DropDown, CustomDatePicker} from '../util';

export default class CreatePuppyProfile extends React.Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProperty} />
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight
  }

  render() {
    return(
      <PuppyDetails  navigator={this.props.navigator} />
    )
  }
}

module.exports =  CreatePuppyProfile;

class PuppyDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: '',
      gender: ['Male', 'Female'],
      puppyName: '',
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
    return this.setState({myNumber: newText})
  }

  onPressNext() {
      this.props.navigator.push({
        component: PuppySummary,
        name : 'Welcome ' + this.state.puppyName,
        PuppyName: this.state.puppyName,
        passProperty: {
          PuppyName: this.state.puppyName,
        }
      })
  }

  render() {
    return (
       <View style={BreederStyle.PageStyle.container}>
         <DropDown dropdownSelection='BreedType'  dropdownlists={this.state.gender} />
         <ScrollView style={{paddingTop:10, height:100}}>
           <TextField label={'Pooch Name'}  labelColor={this.state.labelColor} onChangeText={(puppyName) => this.setState({puppyName})} value={this.state.puppyName==' '?'':this.state.puppyName} highlightColor={'#00BCD4'} />
           <TextField label={'Color'}  value={this.state.color==' '?'':this.state.color}  highlightColor={'#00BCD4'} />
           <CustomDatePicker date={this.state.date1} onDateChange={(date) => {this.setState({date1})}} />
         </ScrollView>
         <CustomButton  navigator={this.props.navigator} name={this.props.name}  onPress={() => {this.onPressNext()}} label='Next'/>
       </View>

    );
  }
}

class PuppySummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary:' ',
      puppyName: props.PuppyName,
      titleText: "Sample Summary",
      bodyText: 'Cooper is a handsome guy with beautiful head and great pigment.'+
        'He is one of the most confident in the litter and one of the first to walk on fours.'+
        'Potty training has started so don’t miss out on this precious little face. ',
      routedFrom: 'puppy',
    };
  }

  onChange(text) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if ( numbers.indexOf(text[i]) > -1 ) {
          newText = newText + text[i];
      }
    }
    return this.setState({myNumber: newText})
  }

  onPressNext() {
    this.props.navigator.push({
      component: UploadPicture,
      name: 'Welcome' + this.state.puppyName,
      PuppyName: this.state.puppyName,
      passProperty: {
        PuppyName: this.state.puppyName,
        RoutedFrom: this.state.routedFrom,
      }
    })
  }

   render() {
    return (
       <View style={BreederStyle.PageStyle.container}>
        <TextInput style={{height: 100, borderColor:'blue', borderBottomColor: '#000000', borderBottomWidth: 1}}
         autoFocus={true} placeholder=" Type your Summary(Optional)! "  multiline={true}  maxLength={600} numberOfLines = {4}
         onChangeText={(summary) => this.setState({summary})}
         value={this.state.summary==' '?'':this.state.summary}
        />

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {this.state.titleText}{"\n"}
        </Text>
        <Text numberOfLines={5} style={{marginBottom: 20}}>
          {this.state.bodyText}
        </Text>

          <CustomButton navigator={this.props.navigator} onPress={() => {this.onPressNext('Puppy')}} label='Next'/>
       </View>
    );
  }

}
