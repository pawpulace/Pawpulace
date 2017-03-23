'use strict';


//var React = require('react-native');
var Dimensions = require('Dimensions');
var windowDimension = Dimensions.get('window');
var bubbleRadius = (windowDimension.width)/2;

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
    TouchableOpacity
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";

const BreederStyle = require('../../style/BreederStyleSheet');
const CommonStyle = require('../../style/commonStyles');
const HomePageStyle= require('../../style/HomePageStyle');


import BreederRegistrationPage from './BreederRegistration';
import PetParentRegistrationPage from './BreederRegistration';
import FosterParentRegistrationPage from './BreederRegistration';
import {CommonNavigator} from '../util'


class ToggleButton extends Component {
  render() {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' style={BreederStyle.ImageStyle.bubbleImage} onPress={this.props.onPress}  >
        <View style= {[BreederStyle.ImageStyle.overlay, this.props.selected ? {backgroundColor: 'rgba(80,94,104,0)'} : {} ]}>
        <Image style={BreederStyle.ImageStyle.bubbleImage} source={this.props.source}>
        </Image>
            <Text style={BreederStyle.ImageStyle.overlayText}>{this.props.label}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

class BreedType extends React.Component {
  constructor(props) {
    super(props);
  }

 render() {
        return (
      <Text style={{paddingTop:100, color:'red'}}> hi </Text>
    )};
}

class BreederRegistration1 extends React.Component {
     onPressNext() {
        this.props.navigator.push({
        component: BreedType,
        BreederName: 'hi',
      })
  }

    render() {
        return(
            <View>
                  <ToggleButton label='Breeder'  onPress={() => { this.onPressNext() }}  />
            </View>
      );
    }
}



class BreederRegistration extends React.Component {
    render() {
        return (
            <BreederRegistrationPage navigator={this.props.navigator}/>
        );
    }
}

class PetParentRegistration extends React.Component {
     render() {
        return(
            <BreederRegistrationPage navigator={this.props.navigator}/>
        );
    }
}

class FosterParentRegistration extends Component {
    render() {
        return(
        <FosterParentRegistrationPage navigator={navigator} />
        );
    }
}

class ButtonRole extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Breeder: false,
            PetParent: false,
            FosterParent: false,
        };

        this.breederImage = require('../../avatar.png');
        this.petParentImage =  require('../../assets/face.png');
        this.fosterParentImage = require('../../assets/face.png');
    }

    updateChoice(type, property) {
        let newState = {...this.state};
        newState[type] = !newState[type];
        this.setState(newState);
        this.onButtonPress(type);
    }

    resetState() {
        this.state = {
            Breeder: false,
            PetParent: false,
            FosterParent: false,
        };
    }

    onButtonPress(type){
            if(type == 'Breeder') {
                this.props.navigator.push({
                    component: BreederRegistration,
                    name: 'BreederRegistration',
                    passProperty: {
                        name: type
                    }
                })
            }
            if(type == 'PetParent'){
                this.props.navigator.push({
                    component: PetParentRegistration,
                    name: 'PetParentRegistration',
                    passProperty: {
                        name: type
                    }
                })
            }
            if(type == 'FosterParent'){
                this.props.navigator.push({
                     component: BreederRegistration,
                     name: 'FosterParentRegistration',
                     passProperty: {
                        name: type
                    }
                })
            }
        }

    render() {
      return (
        <Grid style={{paddingTop:20, paddingBottom:20, paddingLeft:20, paddingRight:20}}>
          <Row>
            <Col>
              <ToggleButton label='Breeder' source= {this.breederImage} onPress={() => { this.updateChoice('Breeder') }} selected={this.state.Breeder} />
            </Col>
            <Col></Col>
            <Col>
                <ToggleButton label='PetParent' source={this.breederImage} onPress={() => { this.updateChoice('PetParent') }} selected={this.state.PetParent} />
            </Col>
          </Row>
        </Grid>
      );
    }
}

class HomeView extends Component {
  render() {
    return (
      <View style={HomePageStyle.PageStyle.container}>

        <View style={HomePageStyle.PageStyle.chooseRoleBox}>
            <View style={{flex:1 , flexDirection:'column'}}>
                <ButtonRole navigator={this.props.navigator} name={this.props.name} />
            </View>
        </View>
      </View>
    );
  }
}

export default class SelectRole extends Component {

    renderScene(route, navigator) {
        return <route.component navigator={navigator} {...route.passProperty} />
    }

    configureScene(route, routeStack) {
            return Navigator.SceneConfigs.PushFromRight
    }

    render() {
        return (
            <CommonNavigator component={HomeView} name='Please select a role'></CommonNavigator>
        );
    }
}


module.exports = SelectRole;
