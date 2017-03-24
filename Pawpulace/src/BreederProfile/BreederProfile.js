import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Navigator,
  ScrollView,
  ListView,
  Text,
  Alert,
  Button,
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';


import SendSMS from 'react-native-sms'

const BreederStyle = require('../../style/BreederStyleSheet');
import {CustomButton,CommonNavigator} from '../util';
//some stuff



class BreederProfile1 extends React.Component {
       constructor(props) {
          super(props);
          this.state = {
            titleText:'test'
          }
       }

   async getFirstName() {
      try {
        const value = await AsyncStorage.getItem('BreederFirstName');
        if (value !== null){
          console.log(value);
          this.setState({titleText: value})
        }
      } catch (error) {
        // Error retrieving data
      }
  }

  render() {
    return (
      <View style={BreederStyle.PageStyle.container}>
         <CustomButton   onPress={() => {this.getFirstName()}} label='Next'/>
       <Text style={{fontSize: 20, fontWeight: 'bold'}} >
            {this.state.titleText}
          </Text>
      </View>
    )
  };
}

export default class BreederProfile extends Component {

    renderScene(route, navigator) {
        return <route.component navigator={navigator} {...route.passProperty} />
    }

    configureScene(route, routeStack) {
            return Navigator.SceneConfigs.PushFromRight
    }

    render() {
        return (
            <CommonNavigator component={BreederProfile1} name='BreederProfile1'/>
        );
    }
}

module.exports =  BreederProfile;
