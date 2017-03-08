'use strict'
import multipleStyles from 'react-native-multiple-styles';

const React = require('react');
const ReactNative = require('react-native');
const NestedStyleSheet = require('rn-nested-stylesheet');

var Dimensions = require('Dimensions');
var windowDimension = Dimensions.get('window');
var bubbleDimension = (windowDimension.width/4);
var bubbleRadius = bubbleDimension/2 ;

const {
  StyleSheet,
} = ReactNative;

const toolBarStyle = {
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'
    },
    toolbarButton:{
        width: 50,
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1
    },
};

const navigationBarStyle={
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        alignSelf:'center',
        flex:-1,
        height:50,
        backgroundColor:'green',
    },

    leftNavButtonText: {
    fontSize: 18,
    marginLeft:10,
    alignItems:'center'
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight:10,
    alignItems:'center'
  },

  title: {
    fontSize:16,
    alignItems:'center'
  },

}

const pageStyle = {
    content: {
        flex:1,
        alignItems:'stretch'
    },
};

const mainStyle = {
  mainContainer: {
    flex: 1,
  },
};

const dropDownStyle = {
    container: {
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 300,
    },

    content: {
    paddingHorizontal: 10,
    paddingTop: 100,
    paddingBottom: 30,
    borderColor: '#ccc'
    },

    imagecontainer: {
        width:20,
        height:20
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
  },

  datePicker: {
    marginLeft: 15,
    marginBottom: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    width: 300,
  },
};

const buttonStyle = {
  container: {
    padding:10,
    width: 120,
    height:40,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'dodgerblue',
    fontSize: 18,
    color: 'white',
    marginBottom: 15,
  },

  largeContainer: {
    padding:10,
    height:40,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'dodgerblue',
    fontSize: 18,
    color: 'white',
    marginBottom: 15,
  }
};

const CommonStyles = NestedStyleSheet(StyleSheet,{
        ToolBarStyle: toolBarStyle,
        PageStyle: pageStyle,
        MainStyle: mainStyle,
        NavigationBarStyle: navigationBarStyle,
        DropDownStyle: dropDownStyle,
        ButtonStyle: buttonStyle,
 });

module.exports = CommonStyles;
