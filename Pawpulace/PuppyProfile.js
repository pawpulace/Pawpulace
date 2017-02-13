import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  PickerIOS,
  Item,
  TouchableHighlight,
  PickerItemIOS,
  ScrollView,
} from 'react-native';

import Button from 'react-native-button';
import DatePicker from 'react-native-datepicker';

//import UploadPicture from './uploadPic';

var dogGender = {
  male: {
    name: 'Male',
  },
  female: {
    name: 'Female',
  },
};

export default class PuppyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'Select One',
      text: '',
      date: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginBottom: 30,}}>
          <TouchableHighlight onPress={() => this._back()}>
            <Text>Back                            </Text>
          </TouchableHighlight>
          <Text>
            Puppy Profile
          </Text>
          <TouchableHighlight onPress={() => this._next()}>
            <Text>Next</Text>
          </TouchableHighlight>
        </View>
        <DatePicker
        style={{width: 300, margin: 20,}}
        date={this.state.date}
        mode="date"
        placeholder="Date of Birth "
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconSource={require('./date_icon.png')}
        customStyles={{
          dateIcon: {
            position: 'relative',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
        <TextInput
          style={{
            height: 41,
            width:  250 ,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
            marginLeft: 60,
            marginBottom: 20,
          }}
          placeholder={'Color'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        />


        <Text>                           Please choose the gender:</Text>
        <PickerIOS
          selectedValue={this.state.gender}
          onValueChange={(gender) => this.setState({gender})}>
          {Object.keys(dogGender).map((gender) => (
            <PickerItemIOS
              key={gender}
              value={gender}
              label={dogGender[gender].name}
            />
          ))}
        </PickerIOS>
        <Button
          containerStyle={{padding:10, width: 70, height:45, overflow:'hidden', borderRadius:10, backgroundColor: 'dodgerblue', marginLeft: 80}}
          style={{fontSize: 20, color: 'white'}}
          onPress={() => this._navigate()}>
          Next
        </Button>
      </View>
    );
  }
  _back(){
   this.props.navigator.push({
     name: 'LitterRegistration', // Matches route.name
   })
  }
  _navigate(){
    this.props.navigator.push({
      name: 'UploadPicture',
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  welcome: {
    fontSize: 15,
    textAlign: 'left',
    margin: 20,
  },
});
