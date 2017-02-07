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

const pageStyle = {
    container: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    chooseRoleBox: {
        width:windowDimension.width-20,
        height:windowDimension.width-20,
        backgroundColor:'#ef553a',
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20, 
        borderRadius:10,
    },

    chooseRoleTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10
    },

};




const HomePageStyles = NestedStyleSheet(StyleSheet,{
        PageStyle: pageStyle,
 });

module.exports = HomePageStyles;