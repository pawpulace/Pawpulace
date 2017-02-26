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

import {Config} from 'react-native-config';

const BreederStyle = require('../../style/BreederStyleSheet');
const CommonStyles = require('../../style/commonStyles');
const Realm = require('realm');

import TextField from 'react-native-md-textinput';
//import Communications from 'react-native-communications';
//import SendSMS from 'react-native-sms';
import {CustomButton,CommonNavigator, DropDown} from '../util';

import BreederProfile from '../BreederProfile/BreederProfile';

const BreederSchema = {
  name: 'Breeder',
  primaryKey: 'emailAddress',
  properties: {
    emailAddress: {type: 'string', default: 'm'},
    firstName:   {type: 'string', default: ''},
    lastName: {type: 'string', default: ''},
    phoneNumber: {type: 'string', default: ''},
    houseAddress: {type: 'string', default: ''},
    breedType: {type: 'string', default: ''},
    breedingExperience: {type: 'int', default: 0},
    breederSummary: {type: 'string', default: ''},
  }
}

let realm = new Realm({
  schema: [BreederSchema],
})

let breederObject = realm.objects('Breeder');

let currentVersion = Realm.schemaVersion(Realm.defaultPath);


class BreederEndRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thankyouText: ' Thank you for registering with us!',
       bodyText: 'You will receive a confirmation via email about your acceptace in next few days.'
    }
  }


/*
  handleAddItem() {
    const name = Math.floor(Math.random() * 10);
    Meteor.call('sendEmail', { name }, (err, res) => {
        console.log('sendEmail', err, res);
    });


    Meteor.call('Items.addOne', { name }, (err, res) => {
    console.log('Items.addOne', err, res);
    });
  }
  */

/*
  someFunction() {

    SendSMS.send({
        body: 'The default body of the SMS!',
        recipients: ['6467251109'],
        successTypes: ['sent', 'queued']
    }, (completed, cancelled, error) => {

        console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

    });
}*/

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
         <CustomButton  navigator={this.props.navigator} onPress={() => {this.onPressNext()}} label='Next'/>
        </View>
        </View>
        /*        <TouchableOpacity onPress={this.someFunction)}>

            <Text >Send a text/iMessage</Text>
        </TouchableOpacity>
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
      BreederName: props.BreederName,
      email: props.BreederEmail,
      summary:' ',
      titleText: "Sample Summary",
      bodyText: 'We are located in the heart of California’s Central Valley'+
        'We are a small family operated kennel breeding family oriented dogs.'+
        ' Being in a farming family with lots of acreage for a dog to run on, and a love for '+
        'hunting at a young age, I was constantly on the lookout for the perfect companion' +
        'and working dog.  The Labrador Retriever was the answer..'
    };
  }

  componentWillMount() {
    //Meteor.connect(Config.SERVER_URL);
  }

  componentWillUnmount () {
   /* this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();*/
    realm.write(() => {
      let breederInfo = realm.create('Breeder', {emailAddres: this.state.email, breederSummary: this.state.summary}, true);
        this.setState({
          summary: breederObject.breedType,
        })
    })
  }

  async sendEmailAndTextConfirmation() {
     /* try {
        const email = await AsyncStorage.getItem('BreederEmail');
        const phone = await AsyncStorage.getItem('BreederPhoneNumber');
        if (email != null){
          Meteor.call('sendEmail', email, 'Welcome to Pawpulace', 'Welcome to pawpualce', (err,res) => {
          console.log('sendText', res);
          });
        },
        if(phone != null) {
          Meteor.call('sendText', phone, (err,res) => {
          console.log('sendText', res);
          });
        }
      } catch (error) {
        // Error retrieving data
      }*/

     this.props.navigator.push({
        component: BreederEndRegistration,
       name : 'Welcome ' + this.state.email,
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

          <CustomButton  navigator={this.props.navigator} onPress={() => {this.sendEmailAndTextConfirmation()}} label='Next'/>
       </View>
    );
  }

}

class BreederPage3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BreederName: props.BreederName,
      email: props.BreederEmail,
    }
  }

  onPressNext() {
      this.props.navigator.push({
        component: BreederSummary,
        name : 'Welcome ' + this.state.email + realm.objects('Breeder').length,
        BreederName : this.state.BreederName,
        BreederEmail: this.state.email,
        passProperty: {
          BreederName: this.state.BreederName,
          BreederEmail: this.state.email,
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
      email: props.BreederEmail,
      ComponentName:null,
      breedTypes: ['Labrador retriever', 'Golden Retriever' , 'Other'],
      years: 0,
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

  componentWillUnmount () {
   /* this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();*/
    realm.write(() => {
      let breederInfo = realm.create('Breeder', {emailAddres: this.state.breederEmail, breedType: this.state.breedTypes,
        breedingExperience: this.state.years}, true);
        this.setState({
          breedTypes: breederObject.breedType,
          years: breederObject.breedingExperience,
        })
    })
  }

  onPressNext() {

      this.props.navigator.push({
        component: BreederPage3,
        name : 'You ' + this.state.email,
        BreederName : this.state.BreederName,
        BreederEmail: this.state.email,
        passProperty: {
          BreederName: this.state.BreederName,
          BreederEmail: this.state.email,
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
          <Text>
            Welcome to React Native! {realm.objects('Breeder').length}
          </Text>
          </ScrollView>
          <CustomButton  navigator={this.props.navigator} name={this.props.name}  onPress={() => {this.onTest()}} label='Press this first to test asyncstorage'/>
          <CustomButton  navigator={this.props.navigator} name={this.props.name}  onPress={() => {this.onPressNext()}} label='Next'/>
       </View>
    );
  }
}


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
    realm.write(() => {
      realm.create('Breeder', {emailAddres: this.state.email, firstName: this.state.firstName, lastName: this.state.lastName, phoneNumber: this.state.phoneNumber,
        houseAddress: this.state.address});
    })
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

  addItem() {
    this.onPressNext();
  }


   onPressNext() {
      this.props.navigator.push({
        component: BreedType,
        name: 'Fuck ' + this.state.email,
        BreederName: this.state.firstName,
        BreederEmail: this.state.email,
        passProperty: {
          BreederName: this.state.first,
          BreederEmail: this.state.email,
        }
      })
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
            <CustomButton  navigator={this.props.navigator} onPress={() => {this.addItem()}} label='Next'/>
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
