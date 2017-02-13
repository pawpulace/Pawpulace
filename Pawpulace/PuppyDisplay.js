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
  NavigatorIOS,
  View
} from 'react-native';

const CommonStyles = require('./style/commonStyles');

export default class PuppyDisplay extends Component {
      render() {
            return (
                <View style= {CommonStyles.MainStyle.mainContainer}>

                     <View style={CommonStyles.ToolBarStyle.toolbar}>
                         <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Cooper</Text>
                         <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Cooper</Text>
                         <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Cooper</Text>

                         <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Cooper</Text>
                         <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Cooper</Text>
                         <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Cooper</Text>
                         <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Cooper</Text>
                         <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Cooper</Text>
                         <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Cooper</Text>
                         <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Cooper</Text>
                         <Text style={CommonStyles.ToolBarStyle.toolbarTitle}>Cooper</Text>
                         
                     </View>
                 </View>
    );
  }
}
