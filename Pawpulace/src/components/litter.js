/*********************************************************************************************
*
* Pawpulace CONFIDENTIAL
*
* NOTICE:  All information contained herein is, and remains the property of Pawpulace Incorporated
* and its suppliers, if any. The intellectual and technical concepts contained herein are proprietary
* to Pawpulace Incorporated. Dissemination of this information or reproduction of this material is
* strictly forbidden unless prior written permission is obtained from Pawpulace.
****************************************************************************************/

import Realm from 'realm';

export default class Litter extends Realm.Object {}
Litter.schema = {
  name: 'Litter',
  properties: {
    sire: 'string',
    dam:   'string',
    breedType: 'string',
    numberOfPuppies: 'string',
  },
};
