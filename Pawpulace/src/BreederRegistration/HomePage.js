/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  Navigator,
  View,
  ToggleButton,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from "react-native-easy-grid";

import {
  Cell,
  Section,
  TableView,
} from 'react-native-tableview-simple';

const CommonStyles = require('../../style/commonStyles');
const SelectRole = require('./SelectRole');
const messageIcon = require('../../message.png');
const moreOptions = require('../../moreOptions.png');
const searchIcon = require('../../search.png');
const puppyPic = require('../../puppy.png');
const BreederStyle = require('../../style/BreederStyleSheet');
const CommonStyle = require('../../style/commonStyles');
const HomePageStyle= require('../../style/HomePageStyle');

export default class HomePage extends React.Component {
  render() {
    return (
      <View style= {CommonStyles.MainStyle.mainContainer}>
        <View style={CommonStyles.ToolBarStyle.toolbar}>
          <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Pawpulace</Text>
        </View>
        <SelectRole/>
        <FooterView />
      </View>
    );
  }
}

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
