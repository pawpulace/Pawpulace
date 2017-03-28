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
        backgroundColor:'#FFFFFF',
        justifyContent: 'center',
        paddingBottom:30,
        paddingLeft:20,
        paddingRight:20,
    },
};

const textStyle = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      chooseType: {
        textAlign: 'center',
        fontSize: 32,
        marginBottom: 20,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
      },
      titleText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        fontWeight: '700',
      },
      bodyText: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
        fontWeight: '400',
        marginBottom: 30,
      },
      litterText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 25,
        fontWeight: '700',
      },
};

const imageStyle = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      },
      chooseTypeImage: {
        width: 100,
        height: 50,
    },

    bubbleImage: {
        height: 80,
        width: 80,
      },

    overlayText: {
        color: 'green',
        fontFamily:'Cochin',
        fontWeight: '600',
        fontSize: 14,
        flex: 0,
        flexDirection:'column',
    },
      overlay: {
        height: bubbleDimension,
        width: bubbleDimension,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
      },
};

const BreederStyle = NestedStyleSheet(StyleSheet,{
        PageStyle: pageStyle,
        TextStyle: textStyle,
        ImageStyle: imageStyle,
 });

module.exports = BreederStyle;
