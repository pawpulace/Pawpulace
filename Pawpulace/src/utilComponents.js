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
    ScrollView,
    TouchableWithoutFeedback,
    NativeModules,
    Dimensions,
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import Video from 'react-native-video';
import Button from 'react-native-button';
var ImagePicker = NativeModules.ImageCropPicker;

const BreederStyle = require('../style/BreederStyleSheet');
const CommonStyle = require('../style/commonStyles');
const HomePageStyle= require('../style/HomePageStyle');

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'white',
    marginBottom: 10
  },
  text: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class VerticalSelect extends Component {
  constructor(props) {
      super(props);
      this.state = {
        verticalSelectionText: props.litterAvailable,
        selectedOption: '',
        checkListOption: '',
      }
  }
  render() {
    return (<ScrollView style={{
      backgroundColor: '#ffffff'
    }}>
      {this.renderCheckList()}
    </ScrollView>);
  }

  renderCheckList() {
    function setSelectedOption(checkListOption){
      this.setState({
        checkListOption,
      });
    }

    function renderOption( option, selected, onSelect, index) {

      const textStyle = {
        paddingTop: 10,
        paddingBottom: 10,
        color: 'black',
        flex: 1,
        fontSize: 14,
      };
      const baseStyle = {
        flexDirection: 'row',
      };
      var style;
      var checkMark;

      if (index > 0) {
        style = [baseStyle, {
          borderTopColor: '#eeeeee',
          borderTopWidth: 1,
        }];
      } else {
        style = baseStyle;
      }

      if (selected) {
        checkMark = <Text style={{
          flex: 0.1,
          color: '#007AFF',
          fontWeight: 'bold',
          paddingTop: 8,
          fontSize: 20,
          alignSelf: 'center',
        }}>✓</Text>;
      }

      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <View style={style}>
            <Text style={textStyle}>{option}</Text>
            {checkMark}
          </View>
        </TouchableWithoutFeedback>
      );
    }

    function renderContainer(options){
      return (
        <View style={{
          backgroundColor: 'white',
          paddingLeft: 20,
          borderTopWidth: 1,
          borderTopColor: '#cccccc',
          borderBottomWidth: 1,
          borderBottomColor: '#cccccc',
        }}>
          {options}
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <View style={{marginTop: 0, backgroundColor: 'white'}}>
          <View style={{
            backgroundColor: '#ffffff',
            paddingTop: 5,
            paddingBottom: 5,
          }}>
            <Text style={{
              color: '#555555',
              paddingLeft: 20,
              marginBottom: 5,
              marginTop: 5,
              fontSize: 14,
              fontWeight: 'bold',
            }}>{this.props.verticalSelection}</Text>
            <RadioButtons
              options={ this.props.verticalSelectionText }
              onSelection={ setSelectedOption.bind(this) }
              selectedOption={ this.state.checkListOption }
              renderOption={ renderOption }
              renderContainer={ renderContainer }
            />
          </View>
        </View>
      </View>);

  }
}
