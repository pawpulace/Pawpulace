'use strict';


//var React = require('react-native');
var Dimensions = require('Dimensions');
var windowDimension = Dimensions.get('window');
var bubbleRadius = (windowDimension.width)/2;

import React, { Component } from 'react';
import {
  AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Image,
    TouchableHighlight,
    TextInput,
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";


const BreederStyle = require('./BreederStyleSheet');
const ToolbarStyle = require('./commonStyles');

class ToggleButton extends Component {
    render() {
        return (
        <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' style={BreederStyle.ImageStyle.bubbleImage} onPress={this.props.onPress}>
            
            <Image style={BreederStyle.ImageStyle.bubbleImage} source={this.props.source}>

                <View style= {[BreederStyle.ImageStyle.overlay, this.props.selected ? {backgroundColor: 'rgba(80,94,104,0)'} : {} ]}>
                    <Text style={BreederStyle.ImageStyle.overlayText}>{this.props.label}</Text>
                </View>
            
            </Image>
        
        </TouchableHighlight>
        );
    }
}

class SelectButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Breeder: false,
            PetParent: false,
            FosterParent: false,
        };
        this.breederImage = require('../assets/face.png');
        this.petParentImage =  require('../assets/face.png');
        this.fosterParentImage = require('../assets/face.png');
    }

    static propTypes = {
      title: PropTypes.string.isRequired,
      navigator: PropTypes.object.isRequired,
    }

     onButtonPress(type){
        switch(type) {
            case 'Breeder':
                this.refs.nav.push({
                    component: BreederRegistration
                })
            case 'PetParent':
                this.refs.nav.push({
                    component: PetParentRegistration
                })
            case 'FosterParent':
                this.refs.nav.push({
                    component: FosterParentRegistration
                })
        }
     }

    updateChoice(type) {
        let newState = {...this.state};
        newState[type] = !newState[type];
        this.setState(newState);
        this.onButtonPress(type);
    }

    render() {
        return (
                    <NavigatorIOS ref='nav'
                        <Grid style={{paddingTop:20, paddingBottom:20, paddingLeft:20, paddingRight:20}}>
                              <Row>
                                    <Col>
                                         <ToggleButton label='Breeder' source= {this.breederImage} onPress={() => { this.updateChoice('Breeder') }} selected={this.state.Breeder} />
                                    </Col>
                                    <Col></Col>
                                    <Col>
                                        <ToggleButton label='PetParent' source={this.petParentImage} onPress={() => { this.updateChoice('PetParent') }} selected={this.state.PetParent} /> 
                                    </Col>
                              </Row>
                              <Row>
                                    <Col></Col>
                                    <Col>
                                        <ToggleButton label='FosterParent' source={this.fosterParentImage} onPress={() => { this.updateChoice('FosterParent') }} selected={this.state.FosterParent} />
                                    </Col>
                                    <Col></Col>
                              </Row>
                        </Grid>
        );
    }
}


module.exports = SelectButton;