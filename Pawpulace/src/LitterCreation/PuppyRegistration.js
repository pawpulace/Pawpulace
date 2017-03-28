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
  Text,
  Image,
  TouchableHighlight,
  NavigatorIOS,
  View
} from 'react-native';

const CommonStyles = require('../../style/commonStyles');
const SelectLitter = require('./SelectLitter');

/* Entry Point for Puppy Registratiom */
export default class PuppyRegistration extends React.Component {
  render() {
    return (
      <View style= {CommonStyles.MainStyle.mainContainer}>
        <View style={CommonStyles.ToolBarStyle.toolbar}>
            <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Register a Puppy</Text>
        </View>
        <SelectLitter/>
      </View>
    );
  }
}
