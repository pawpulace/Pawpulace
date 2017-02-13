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
  View,
  TouchableOpacity,
} from 'react-native';

const BreederStyle = require('./style/BreederStyleSheet');
const CommonStyles = require('./style/commonStyles');

import TextField from 'react-native-md-textinput';

import {CustomButton,CommonNavigator, DropDown} from './src/util';

class PuppyDescription extends Component {
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
        name: 'UploadPicture',
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

        <Text style={{fontSize: 20, fontWeight: 'bold'}} >
          {this.state.titleText}
        </Text>
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>
        <TouchableOpacity onPress={this.onPressNext()} style={styles.button}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
       </View>
    );
  }

}
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
  }
});
