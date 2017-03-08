/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
import CheckBox from 'react-native-check-box';
import {CustomButton,CommonNavigator, DropDown, CustomDatePicker} from '../util';

const BreederStyle = require('../../style/BreederStyleSheet');
const CommonStyles = require('../../style/commonStyles');
import PuppyProfilePage from '../ProfilePages/PuppyProfile';

export default class PuppyLitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      puppyName: props.PuppyName,
      puppyList: [props.PuppyName],
      titleText: 'Litter Page',
      bodyText: 'If you are done adding all the puppies please press complete.',
      puppyShowText: 'Please click on the puppy name to view their public profile.',
    }
  }

  componentDidMount() {
    //this.loadPuppyArray();
    this.loadData();
  }

  loadPuppyArray() {
    this.puppyList.push(puppyName)
  }

  loadData() {
    this.setState({
      dataArray: [
        {
          "path": this.state.puppyName,
          "name": this.state.puppyName,
          "checked": false,
        },
        {
          "path": "Coop",
          "name": "Coop",
          "checked": true,
        },
        {
          "path": "Coop",
          "name": "Coop",
          "checked": false,
        },
      ],
    })
  }

  onPressNext() {
    this.props.navigator.push({
      component: PuppyProfilePage,
      passProperty: {
        PuppyName: this.state.puppyName,
      }
    })
  }

  onClick(data) {
    data.checked = !data.checked;
    let msg=data.checked? 'you checked ':'you unchecked '
  }

  renderView() {
    if (!this.state.dataArray || this.state.dataArray.length === 0)return;
      var len = this.state.dataArray.length;
      var views = [];
      for (var i = 0, l = len - 2; i < l; i += 2) {
        views.push(
          <View key={i}>
            <View style={styles.item}>
              {this.renderCheckBox(this.state.dataArray[i])}
              {this.renderCheckBox(this.state.dataArray[i + 1])}
            </View>
            <View style={styles.line}/>
          </View>
        )
      }
      views.push(
        <View key={len - 1}>
          <View style={styles.item}>
            {len % 2 === 0 ? this.renderCheckBox(this.state.dataArray[len - 2]) : null}
            {this.renderCheckBox(this.state.dataArray[len - 1])}
          </View>
        </View>
      )
    return views;
  }

  renderCheckBox(data) {
    var leftText = data.name;
    return (
      <CheckBox
        style={{flex: 1, padding: 10}}
        onClick={()=>this.onClick(data)}
        isChecked={data.checked}
        leftText={leftText}
      />);
  }

  render() {
    return (
      <View style={BreederStyle.PageStyle.container}>
        <ScrollView style={{marginTop: 75}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginBottom: 20}} >
            {this.state.titleText}
          </Text>
          {this.renderView()}
          <Text style={{alignSelf: 'center', marginBottom: 20}}>
            {this.state.puppyShowText}
          </Text>
          <Text style={{alignSelf: 'center', marginBottom: 20}}>
            {this.state.bodyText}
          </Text>
        </ScrollView>
        <CustomButton  navigator={this.props.navigator} onPress={() => {this.onPressNext()}} label='Complete'/>
      </View>
    )
  }
}

class PuppyLitterEndRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puppyName: props.PuppyName,
      thankyouText: 'You are all set',
      bodyText: 'The puppy profiles are now listed on Pawpulace. We will promote these beautiful puppies to people wanting to adopt this breed.',
      puppyShowText: 'Please click on the puppy name to view their public profile.'
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
      </View>
    </View>
    )
  };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2',
        marginTop:100,
    },
    item: {
        flexDirection: 'row',
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
})
