import React, { Component, PropTypes } from 'react';
import {
    Navigator,
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from 'react-native';

const CommonStyle = require('../style/commonStyles');
const BreederStyle = require('../style/BreederStyleSheet');
import DatePicker from 'react-native-datepicker';
import Button from 'react-native-button';

export class CommonNavigator extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProperty} />
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight
  }

  render() {
    return (
      <Navigator
        configureScene={ this.configureScene }
        style={CommonStyle.MainStyle.mainContainer}
        renderScene = {this.renderScene}
        initialRoute={{ component: this.props.component,  name:this.props.name}}
        navigationBar = {
            <Navigator.NavigationBar style = {CommonStyle.NavigationBarStyle.container}
                routeMapper = {NavigationBarRouteMapper} {...this.props}/>
        }
      />
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight underlayColor="transparent" onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ CommonStyle.NavigationBarStyle.leftNavButtonText }> Back </Text>
        </TouchableHighlight>
    )}
    else { return null }
  },

  RightButton(route, navigator, index, navState) {
    if (route.onPress) {
      return (
        <TouchableHighlight onPress={ () => route.onPress() }>
          <Text style={ CommonStyle.NavigationBarStyle.rightNavButtonText }> { route.rightText || 'Right Button' }>
          </Text>
        </TouchableHighlight>
      )
    }
  },

  Title(route, navigator, index, navState) {
    return <Text style={ CommonStyle.NavigationBarStyle.title }>{route.name}</Text>
  }
}

export class CustomDatePicker extends Component {
  render() {
    return (
      <DatePicker style={CommonStyle.DropDownStyle.datePicker}
        mode="date"
        placeholder="Date of Birth "
        format="MM-DD-YYYY"
        minDate="05-01-2016"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconSource={require('../date_icon.png')}
      />
    )
  }
}

export class CustomButton extends React.Component {
  render() {
    return (
        <View style={{alignItems: 'center'}}>
          <Button
            style={CommonStyle.ButtonStyle.container}
            onPress={this.props.onPress}
          >
            {this.props.label}
          </Button>
        </View>
    );
  }
}

export class CustomLargeButton extends React.Component {
  render() {
    return (
        <View style={{alignItems: 'center'}}>
          <Button
            style={CommonStyle.ButtonStyle.largeContainer}
            onPress={this.props.onPress}
          >
            {this.props.label}
          </Button>
        </View>
    );
  }
}

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
export class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        message: 'Try clicking the top-right menus',
        firstMenuDisabled: false,
        dropdownSelectionText: props.dropdownSelection
        }
    }

  render(){

        return(
          <MenuContext ref="MenuContext">
           <View style={CommonStyle.DropDownStyle.content}>
              <Menu style={CommonStyle.DropDownStyle.dropdown}  onSelect= {(value) => this.setState({ dropdownSelectionText: value })}>
                  <MenuTrigger>
                    <Text>{this.state.dropdownSelectionText}</Text>
                  </MenuTrigger>
                  <MenuOptions optionsContainerStyle={CommonStyle.DropDownStyle.dropdownOptions}
                                       renderOptionsContainer={(options) => <ScrollView><Text>Choose...</Text>{options}</ScrollView>}>
                       {

                          this.props.dropdownlists.map((item, index) => {
                            return (
                                      <MenuOption key={index} value={item}>
                                          <Text>{item}</Text>
                                      </MenuOption>
                            )
                            })
                        }
                 </MenuOptions>
              </Menu>
            </View>
          </MenuContext>
        )
    }
}


//Styles Start
const styles = StyleSheet.create({

  content: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },

  container: {
    flex:1,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',

     paddingTop:10,
     paddingBottom:10,
    flexDirection:'row'
  },
  loginButtonBackground: {
    flex: 1,
    height: 40,
    borderRadius: 5
  },
  loginButtonLabel: {
    color: 'white'
  },

  topbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  menuTrigger: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  menuTriggerText: {
    color: 'lightgrey',
    fontWeight: '600',
    fontSize: 20
  },
  disabled: {
    color: '#ccc'
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 100,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  contentText: {
    fontSize: 18
  },
  dropdown: {
    width: 300,
    borderColor: '#999',
    borderWidth: 1,
    padding: 5
  },
  dropdownOptions: {
    marginTop: 30,
    borderColor: '#ccc',
    borderWidth: 2,
    width: 300,
    height: 200
  }
})
