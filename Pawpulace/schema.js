import React from 'react';
import {AppRegistry, View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';

var realm = require('realm');

const BreederSchema = {
  name: 'Breeder',
  properties: {
    name:     'string',
    location: 'string',
    breedType:  'string',
    experience: 'int',
    address:  'string',
    email:  'string',
    phoneNumber:  'int',
    //pets: {type: 'list', objectType: 'Pets'},
  }
};

// Initialize a Realm with Car and Person models
let realm = new Realm({schema: [BreederSchema]});

});
