import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import BreederProfilePage from './ProfilePages/BreederProfile';
import {CommonNavigator, CustomButton} from './util'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default class Row extends React.Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProperty} />
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight
  }

  constructor(props) {
    super(props);
  }
  
  onAddItem() {
    this.props.navigator.push({
      component: BreederProfilePage,
    })
  }
  render() {
    return (
      <TouchableHighlight onPress={() => {this.onAddItem()}}>
        <View style={styles.container}>
          <Image source={{ uri: this.props.picture.large}} style={styles.photo} />
          <Text style={styles.text}>
            {`${this.props.name.first} ${this.props.name.last}`}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
