
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  NavigatorIOS,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const BreederStyle = require('../../style/BreederStyleSheet');
const CommonStyles = require('../../style/commonStyles');

class BreederRegistration extends React.Component {
    render() {
        return(
        <BreederRegistrationPage navigator={this.props.navigator}/>
        );
    }
}

class PetParentRegistration extends React.Component {
     render() {
        return(
        <PetParentRegistrationPage navigator={this.props.navigator}/>
        );
    }
}

class FosterParentRegistration extends Component {
    render() {
        return(
        <FosterParentRegistrationPage navigator={this.props.navigator}/>
        );
    }
}

export default class RegistrationPage extends React.Component {

     onButtonPress(type){
        switch(type) {
            case 'Breeder':
                this.props.navigator.push({
                    component: BreederRegistration,
                    title:'BreederRegistration',
                })
            case 'PetParent':
                this.props.navigator.push({
                    component: PetParentRegistration,
                    title: 'Register as Pet Parent',
                })
            case 'FosterParent':
                this.props.navigator.push({
                    component: FosterParentRegistration,
                     title: 'Welcome Foster Parent',
                })
        }
    }

    render() {
        return (
        );
    }
}
