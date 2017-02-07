import React, { Component, PropTypes } from 'react';
import {
    Navigator,
    Text,
    View,
    Button,
    Image,
    StyleSheet,
     ScrollView,
    TouchableHighlight
} from 'react-native';

import AwesomeButton from 'react-native-awesome-button';
const CommonStyle = require('../style/commonStyles');
const BreederStyle = require('../style/BreederStyleSheet');



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
                    } >
            </Navigator>
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









export class CustomButton extends React.Component {
    render() {
        return (
            <Button
                style={{fontSize: 20, color: 'green', borderRadius:4}}
                onPress={this.props.onPress}
                title={this.props.label}
                 />

            /*<View style={styles.container}>
                    <AwesomeButton states={{
                                    default: {
                                      text: this.props.label,
                                      onPress: this.props.onPress,
                                      backgroundColor: '#1155DD'
                                    }
                                   }} />
           </View>*/
        );
    }
}










import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
export class DropDown extends React.Component {

    constructor(props) {
        super(props);

      
    }

  render(){
 
        return(
            
                <MenuContext style={{ flex: 1 }} ref="MenuContext">
                <View style={styles.content}>
                    <Menu style={styles.dropdown} >
                        <MenuTrigger>
                          <Text>{this.props.dropdownSelection}</Text>
                        </MenuTrigger>
                        <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                                             renderOptionsContainer={(options) => <ScrollView><Text>Choose...</Text>{options}</ScrollView>}>
                                  <View>
                                  {
                                    
                                this.props.dropdownlists.map((item, index) => {
                                  return (
                                            <MenuOptions key={index} > 
                                                <Text>{item}</Text>
                                            </MenuOptions>
                                  )
                                })
                                  }
                              </View>
                       </MenuOptions>
                    </Menu>
                                </View>
                </MenuContext>
        )
    }
}



const styles = StyleSheet.create({
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


/*export function NavigationBarRouteMapper;*/

/*
export function HelloChandu() {
}

export function HelloTester() {
}

import { HelloChandu } from './helpers'
*/

