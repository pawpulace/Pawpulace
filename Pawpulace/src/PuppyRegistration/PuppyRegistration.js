/**
 * Puppy Registration Entry Point
 */

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
