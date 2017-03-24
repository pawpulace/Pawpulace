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

import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from "react-native-easy-grid";

import {
  Cell,
  Section,
  TableView,
} from 'react-native-tableview-simple';

const breederPic = require('../../mihir.jpg');

class BreederProfilePage extends React.Component {
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
      component: BreederPublicDisplay,
      passProperty: {
        PuppyName: this.state.puppyName,
      }
    })
  }

  render() {
    return (
      <BreederPublicDisplay  navigator={this.props.navigator} />
    );
  }
}

export default class BreederPublicDisplay extends Component {
  render() {
  return(
    <View style= {CommonStyles.MainStyle.mainContainer}>
      <View style={styles.profilePage}>
        <Image
          source={breederPic}
        />
      </View>
      <ScrollView contentContainerStyle={styles.stage}>
        <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Cooper</Text>
        <Text style={BreederStyle.TextStyle.bodyText}>
          Cooper is a handsome boy with very sharp features. He ha a calm temparament and likes to
          play with his brothers and sisters.
        </Text>
        <TableView>
          <Section>
            <Cell cellStyle="RightDetail" title="DOB" detail="12/30/2016" />
            <Cell cellStyle="RightDetail" title="Gender" detail="Male" />
            <Cell cellStyle="RightDetail" title="Breed" detail="Golden Retriever" />
            <Cell cellStyle="RightDetail" title="Temparament" detail="Calm" />
            <Cell cellStyle="RightDetail" title="Ready to go home" detail="02/24/2017" />
          </Section>
        </TableView>
      </ScrollView>
    </View>
    )
  };
}

module.exports = BreederPublicDisplay;

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
