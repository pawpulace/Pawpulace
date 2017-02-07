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

const CommonStyles = NestedStyleSheet(StyleSheet,{
        ToolBarStyle: toolBarStyle,
        PageStyle: pageStyle,
        MainStyle: mainStyle,
        NavigationBarStyle: navigationBarStyle,
 });

module.exports = CommonStyles;