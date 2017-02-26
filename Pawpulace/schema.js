import React from 'react';
import {AppRegistry, View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';

const Realm = require('realm');

class Breeder extends Realm.Object { }
Breeder.schema = {
  name: 'Breeder',
  primaryKey: 'emailAddress',
  properties: {
    emailAddress: {type: 'string', default: 'm'},
    firstName:   {type: 'string'},
    lastName: {type: 'string'},
    phoneNumber: {type: 'string'},
    houseAddress: {type: 'string'},
    breedType: {type: 'string', default: ''},
    breedingExperience: {type: 'int', default: 0},
    breederSummary: {type: 'string', default: ''},
  }
};

export default new Realm({ schema: [Breeder] });
