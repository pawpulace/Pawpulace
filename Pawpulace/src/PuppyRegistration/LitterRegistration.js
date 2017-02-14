/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  NavigatorIOS,
  Navigator,
  ScrollView,
  ListView,
  Text,
  Button,
  Image,
  Keyboard,
  TouchableHighlight,
  View, TouchableOpacity, NativeModules, Dimensions,Alert,
} from 'react-native';

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

const BreederStyle = require('../../style/BreederStyleSheet');
const CommonStyles = require('../../style/commonStyles');

import TextField from 'react-native-md-textinput';
import DatePicker from 'react-native-datepicker';
import Video from 'react-native-video';
var ImagePicker = NativeModules.ImageCropPicker;
import UploadPicture from '../../uploadPic';

import {CustomButton,CommonNavigator, DropDown} from '../util';

class UploadPupPicture extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      nextScene: props.nextScene,
    }
  }
  render(){
    return (
      <UploadPicture navigator={this.props.navigator} compoName={this.state.nextScene}/>
    )
  }
}

class PuppySummary extends Component {
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
        component: UploadPupPicture,
        passProperty: {
          nextScene: 'PuppyEndRegistration',
        }
      })
  }

   render() {
    return (
       <View style={BreederStyle.PageStyle.container}>


        <TextInput style={{height: 100, borderColor:'blue', borderBottomColor: '#000000', borderBottomWidth: 1}}
         autoFocus={true} placeholder=" Type your Summary(Optional)! "  multiline={true}  maxLength={600} numberOfLines = {4}
         onChangeText={(summary) => this.setState({summary})}
         value={this.state.summary==' '?'':this.state.summary}
        />

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {this.state.titleText}
        </Text>
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>

          <CustomButton navigator={this.props.navigator} onPress={() => {this.onPressNext()}} label='Next'/>
       </View>
    );
  }

}

class PuppyDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      BreederName: props.BreederName,
      breedTypes: ['Male', 'Female'],
      color: '',
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
        component: PuppySummary,
        name : 'Summary',
      })
  }

  render() {
    return (
       <View style={BreederStyle.PageStyle.container}>
        <DropDown dropdownSelection='Gender'  dropdownlists={this.state.breedTypes} />
         <ScrollView contentContainerStyle={BreederStyle.PageStyle.container}>

             <TextField label={'Color'}  value={this.state.color==' '?'':this.state.color}  highlightColor={'#00BCD4'} />
          </ScrollView>
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

class LitterInformation extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        sire:'',
        dam:'',
         pupsAvailable:'',
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

  onPressNext() {
      if(this.state.dam == ''){
        Alert.alert('Please fill in the sire info');
      }
      else{
        this.props.navigator.push({
          component: PuppyDetails,
          name: 'Puppy Details',
        })
      }
  }

  render() {
  return(
     <View style = {BreederStyle.PageStyle.container}>
          <ScrollView contentContainerStyle={BreederStyle.PageStyle.container}>
              <TextField label={'Sire'}  onChangeText={(sire) => this.setState({sire})} value={this.state.sire==' '?'':this.state.sire}  highlightColor={'#00BCD4'} />
              <TextField label={'Dam'}  onChangeText={(dam) => this.setState({dam})} value={this.state.dam==' '?'':this.state.dam} highlightColor={'#00BCD4'} />
              <TextField label={'Number of Pups Available?'}
                                onChangeText={(pupsAvailable) => this.setState({pupsAvailable})} value={this.state.pupsAvailable==' '?'':this.state.pupsAvailable}
                                highlightColor={'#00BCD4'}
                                keyboardType={'numeric'}
                                maxLength={2}
                                onSubmitEditing={Keyboard.dismiss}
                                /*onChangeText = {(text) => {this.onChange(text)}}
                                value = {this.state.myNumber} */
                                />
            </ScrollView>
            <CustomButton  navigator={this.props.navigator} onPress={() => {this.onPressNext()}} label='Next'/>
            </View>
          )
      }
}

export default class LitterRegistration extends React.Component {
  renderScene(route, navigator) {
      return <route.component navigator={navigator} {...route.passProperty} />
  }

  configureScene(route, routeStack) {
          return Navigator.SceneConfigs.PushFromRight
  }

  render() {
      return(
         /* <CommonNavigator component={BreederInformation} name='BreederInformation'/>*/
       <LitterInformation  navigator={this.props.navigator} />
      )
  }
}


module.exports =  LitterRegistration;
