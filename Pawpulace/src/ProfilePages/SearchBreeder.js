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
const HomePageStyle= require('../../style/HomePageStyle');

import TextField from 'react-native-md-textinput';
import DatePicker from 'react-native-datepicker';
import CreatePuppyProfile from '../PuppyRegistration/CreatePuppyProfile';

import {CustomButton,CommonNavigator, DropDown, CustomDatePicker} from '../util';

import data from '../demoData.js';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Cell,
  Section,
  TableView,
} from 'react-native-tableview-simple';

const breederPic = require('../../mihir.jpg');

import Row from '../Row';

export default class SearchBreederProfile extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        dataSource: ds.cloneWithRows(data),
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} navigator={this.props.navigator}/>}
      />
    );
  }
}

module.exports = SearchBreederProfile;


var FooterView = React.createClass({
  render: function () {
    if (!this.props.nowPlaying) {
      return (
        <View style={styles.footerSection}>
          <Grid style={{paddingTop:10, paddingBottom:10, paddingLeft:10, paddingRight:10}}>
            <Row style={{alignSelf: 'center'}}>
              <Col></Col>
              <Col>
                <TouchableHighlight onPress={this._onPressButton}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={require('../../search.png')}
                  />
                </TouchableHighlight>
              </Col>
              <Col>
                <TouchableHighlight onPress={this._onPressButton}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={require('../../message.png')}
                  />
                </TouchableHighlight>
              </Col>
              <Col style={{alignSelf: 'flex-end'}}>
                <TouchableHighlight onPress={this._onPressButton}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={require('../../moreOptions.png')}
                  />
                </TouchableHighlight>
              </Col>
            </Row>
          </Grid>
        </View>
      );
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  footerSection: {
    flex: 0,
    borderTopWidth: 2,
    borderColor: '#5cc946',
    height: 50,
  },
  profilePage: {
    flex: 0,
    borderTopWidth: 2,
    borderColor: '#5cc946',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    flex: 0,
    borderTopWidth: 2,
    borderColor: '#5cc946',
  },
  stage: {
    flex: 0,
    borderTopWidth: 2,
    borderColor: '#5cc946',
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },

});
