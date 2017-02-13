import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Item,
  TouchableHighlight,
} from 'react-native';
import Button from 'react-native-button';

export default class LitterRegistration extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>
            Litter Registration
          </Text>
        </View>
        <TextInput
          style={{
            height: 41,
            width:  250 ,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
            marginLeft: 60,
          }}
          placeholder={'Sire'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        />
        <TextInput
          style={{
            marginTop: 15,
            height: 41,
            width:  250 ,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
            margin: 60,
          }}
          placeholder="Dam"
          onChangeText={(text) => this.setState({text})}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style ={{
              fontSize: 15,
              textAlign: "left",
            }}>
          Puppies available:
          </Text>
          <TextInput
          style={{
            height: 31,
            width:  35 ,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
          }}
          placeholder=""
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        <Text style={styles.welcome}>
          Please enter the puppy information on the next page
        </Text>
        <Button
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:10, backgroundColor: 'dodgerblue'}}
          style={{fontSize: 20, color: 'white'}}
          onPress={() => this._navigate()}>
          Next
        </Button>
      </View>
    );
  }
  _navigate(){
   this.props.navigator.push({
     name: 'PuppyProfile', // Matches route.name
   })
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 50,
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
