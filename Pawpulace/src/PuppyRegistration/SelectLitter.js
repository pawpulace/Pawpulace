'use strict';

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Image,
    TouchableHighlight,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import LitterRegistration from './LitterRegistration';

const BreederStyle = require('../../style/BreederStyleSheet');
const CommonStyle = require('../../style/commonStyles');
const HomePageStyle= require('../../style/HomePageStyle');

import {CommonNavigator, CustomButton} from '../util'
import VerticalSelect from '../utilComponents';

export default class SelectLitter extends Component {
    renderScene(route, navigator) {
        return <route.component navigator={navigator} {...route.passProperty} />
    }

    configureScene(route, routeStack) {
            return Navigator.SceneConfigs.PushFromRight
    }

    render() {
        return (
            <CommonNavigator component={LitterView} />
        );
    }
}


module.exports = SelectLitter;

class LitterView extends Component {
   /*static propTypes = {
      navigator: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
    }*/
    constructor(props) {
      super(props);
      this.state = {
        litterAvailable: ['Yes', 'No' , 'Upcoming'],
        selectedOption: props.checkListOption,
        name: 'Test',
      }
    }

    onPressNext(){
        this.props.navigator.push({
          component: LitterEntry,
          name: 'Litter Information',
        })
    }
    render() {
        return (
            <View style={HomePageStyle.PageStyle.containerPuppyRegistration}>
                        <View style={HomePageStyle.PageStyle.alignPuppyRegistration}>
                            <View style={{flex:1 , flexDirection:'column'}}>
                              <VerticalSelect verticalSelection='Do you have puppies?' verticalSelectionText={this.state.litterAvailable} />
                            </View>
                        </View>
                        <CustomButton  navigator={this.props.navigator} name={this.props.name}  onPress={() => {this.onPressNext()}} label='Next'/>
            </View>
        );
    }
}

class LitterEntry extends React.Component {
  render() {
    return (
      <LitterRegistration navigator={this.props.navigator}/>
    );
  }
}
