/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  TextInput,
  NavigatorIOS,
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

const BreederStyle = require('../../style/BreederStyleSheet');
const CommonStyles = require('../../style/commonStyles');

import TextField from 'react-native-md-textinput';
import Communications from 'react-native-communications';
import SendSMS from 'react-native-sms';
import {CustomButton,CommonNavigator, DropDown} from '../util';

import BreederProfile from '../BreederProfile/BreederProfile';

class BreederEndRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thankyouText: ' Thank you for registering with us!',
       bodyText: 'You will receive a confirmation via email about your acceptace in next few days.'
    }
  }

  someFunction() {
 
    SendSMS.send({
        body: 'The default body of the SMS!',
        recipients: ['6467251109'],
        successTypes: ['sent', 'queued']
    }, (completed, cancelled, error) => {
 
        console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
 
    });
}

 onPressNext() {
      this.props.navigator.push({
        component: BreederProfile,
       name : 'Welcome ' + this.state.BreederName,
        
      })
  }

  render() {
  return(
    <View style={BreederStyle.PageStyle.container}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}} >
          {this.state.thankyouText}
        </Text>
        <Text>
          {this.state.bodyText}
        </Text>
        <TouchableOpacity onPress={this.someFunction)}>
        
            <Text >Send a text/iMessage</Text>
        </TouchableOpacity>
         <CustomButton  navigator={this.props.navigator} onPress={() => {this.onPressNext()}} label='Next'/>
        </View>
        </View>
        /*
        <TouchableOpacity onPress={() => Communications.email(['pratheba@gmail.com'],null,null,'My Subject','My body text')}>
        
            <Text >Send a text/iMessage</Text>
        </TouchableOpacity>*/
        )
  };
}

class BreederSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary:' ',
      titleText: "Sample Summary",
      bodyText: 'We are located in the heart of California’s Central Valley'+  
        'We are a small family operated kennel breeding family oriented dogs.'+
        ' Being in a farming family with lots of acreage for a dog to run on, and a love for '+ 
        'hunting at a young age, I was constantly on the lookout for the perfect companion' +
        'and working dog.  The Labrador Retriever was the answer..'
    };
  }

   onPressNext() {
      this.props.navigator.push({
        component: BreederEndRegistration,
       name : 'Welcome ' + this.state.BreederName,
        
      })
  }

   render() {
    return (
       <View style={BreederStyle.PageStyle.container}>


        <TextInput style={{height: 100, borderColor:'blue', borderBottomColor: '#000000', borderBottomWidth: 1}} 
         placeholder=" Type your Summary(Optional)! "  multiline={true}  maxLength={600} numberOfLines = {4} 
       onChangeText={(summary) => this.setState({summary})}
        value={this.state.summary==' '?'':this.state.summary}
        />
        
        <Text style={{fontSize: 20, fontWeight: 'bold'}} >
          {this.state.titleText}
        </Text>
        <Text >
          {this.state.bodyText}
        </Text>
        
          <CustomButton  navigator={this.props.navigator} onPress={() => {this.onPressNext()}} label='Next'/>
       </View>
    );
  }

}

class BreederPage3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BreederName: props.BreederName
    }
  }

  onPressNext() {
      this.props.navigator.push({
        component: BreederSummary,
       name : 'Welcome ' + this.state.BreederName,
        BreederName : this.state.BreederName,
        passProperty: {
          BreederName: this.state.BreederName
        }
      })
  }


  render() {
    return (
       <View style={BreederStyle.PageStyle.container}>
          <CustomButton  navigator={this.props.navigator} onPress={() => {this.onPressNext()}} label='Next'/>
       </View>
    );
  }
}



class BreedType extends Component {

  constructor(props) {
    super(props);
    this.state = {
      BreederName: props.BreederName,
      ComponentName:null,
      breedTypes: ['Labrador retriever', 'Golden Retriever' , 'Other'],
      years:0
    }
  }

  onChanged(text) {

      let newText = '';
      let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
        if ( numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
    }   
   this.setState({years: newText})
  }

  onPressNext() {
   
      this.props.navigator.push({
        
        component: this.state.ComponentName,
        name : 'Welcome ' + this.state.BreederName,
        BreederName : this.state.BreederName,
        passProperty: {
          BreederName: this.state.BreederName
        }
      })
  }
  onTest() {
    this.setState({ComponentName: BreederPage3});
  }

  render() {
    return (
       <View style={BreederStyle.PageStyle.container}>
        <DropDown dropdownSelection='BreedType'  dropdownlists={this.state.breedTypes} />
         <ScrollView style={{paddingTop:10, height:100}}>
          <TextField label={'Breeding experience in years'}  maxLength={2} onChangeText={(text)=> this.onChanged(text)} value={this.state.years==' '?'':this.state.years}  highlightColor={'#00BCD4'} />
          </ScrollView>
          <CustomButton  navigator={this.props.navigator} name={this.props.name}  onPress={() => {this.onTest()}} label='test'/>
          <CustomButton  navigator={this.props.navigator} name={this.props.name}  onPress={() => {this.onPressNext()}} label='Next'/>
       </View>
    );
  }
}

/*
class BreedType extends Component {

  constructor(props) {
    super(props);
    this.state = {
      breedTypes: ['Labrador retriever', 'Golden Retriever' , 'Other']
    }

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  render() {
    return (
      <ListView
        style={{flex:1, paddingTop: 100}}
        dataSource={this.state.dataSource}
        renderRow={(data) => <View><Text>{data}</Text></View>}
      />
    );
  }
}
*/

class BreederInformation extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        labelColor:'#828da0',
        firstName:'',
        lastName:'',
        phoneNumber:'',
        email:'',
        address: '',
        myNumber:0
      }
    }


  onChange(text) {

      let newText = '';
      let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
        if ( numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
    }   
    this.setState({myNumber: newText})
  }

  componentWillMount () {
    /*this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
   */
   }

  componentWillUnmount () {
   /* this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();*/
  }

  _keyboardDidShow () {
    alert('Keyboard Shown');
  }

  _keyboardDidHide () {
    alert('Keyboard Hidden');
  }


  async onPressNext() {
      if(this.state.firstName == '' || this.state.lastName=='' || this.state.phoneNumber =='' || this.state.phoneNumber.length < 10) {
        Alert.alert('Please fill in the required information');
        this.setState({labelColor: 'red'});
      }
      else{
        try {
          await AsyncStorage.setItem('BreederFirstName', this.state.firstName);
          await AsyncStorage.setItem('BreederLastName', this.state.lastName);
          await AsyncStorage.setItem('BreederEmail', this.state.email);
          await AsyncStorage.setItem('BreederAddress', this.state.address);
        } catch (error) {
          this._appendMessage('AsyncStorage error: ' + error.message);
        }

      this.props.navigator.push({
        component: BreedType,
        name: 'Welcome ' + this.state.firstName,
        BreederName: this.state.firstName,
        passProperty: {
          BreederName: this.state.firstName
        }
      })
  }
}

  render() {
  return(
     <View style = {BreederStyle.PageStyle.container}>
          <ScrollView contentContainerStyle={BreederStyle.PageStyle.container}>
              <TextField label={'First Name'}  onChangeText={(firstName) => this.setState({firstName})} value={this.state.firstName==''?'':this.state.firstName}  labelColor={this.state.labelColor} highlightColor={'#00BCD4'} />
              <TextField label={'Last Name'}  onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName==''?'':this.state.lastName} highlightColor={'#00BCD4'} />
              <TextField label={'Email'}  onChangeText={(email) => this.setState({email})} value={this.state.email==''?'':this.state.email} highlightColor={'#00BCD4'} keyboardType={'email-address'}  />
              <TextField label={'Phone Number'}
                                onChangeText={(phoneNumber) => this.setState({phoneNumber})} value={this.state.phoneNumber==''?'':this.state.phoneNumber}
                                highlightColor={'#00BCD4'} 
                                keyboardType={'numeric'} 
                                maxLength={10}
                                onSubmitEditing={Keyboard.dismiss}
                                /*onChangeText = {(text) => {this.onChange(text)}}
                                value = {this.state.myNumber} */
                                />
              <TextField label={'Address'} onChangeText={(address) => this.setState({address})} value={this.state.address==''?'':this.state.address}  highlightColor={'#00BCD4'} multiline={true}/>
            </ScrollView>
            <CustomButton  navigator={this.props.navigator} onPress={() => {this.onPressNext()}} label='Next'/>
            </View>
          )
      }
}

export default class BreederRegistrationPage extends React.Component {


  render() {
      return(
         /* <CommonNavigator component={BreederInformation} name='BreederInformation'/>*/
       <BreederInformation  navigator={this.props.navigator} />
      )
  }
}


module.exports =  BreederRegistrationPage;