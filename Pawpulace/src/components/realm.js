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
//List of puppies to be added later

class Litter extends Realm.Object {}
Litter.schema = {
  name: 'Litter',
  properties: {
    sire: 'string',
    dam:   'string',
    breedType: 'string',
    numberOfPuppies: 'string',
  },
};

class Puppy extends Realm.Object {}
Puppy.schema = {
  name: 'Puppy',
  primaryKey: 'name',
  properties: {
    name: 'string',
    breedType: 'string',
    color: 'string',
    dob: 'date',
    description: 'string',
    imageUri: 'string',
  },
};

class BreederSchema extends Realm.Object {}
BreederSchema.schema = {
  name: 'BreederSchema',
  primaryKey: 'emailAddress',
  properties: {
    emailAddress: 'string',
    firstName:   'string',
    lastName: 'string',
    phoneNumber: 'string',
    houseAddress: 'string',
    breedType: 'string',
    breedingExperience: 'string',
    breederSummary: 'string', // optional property
  },
};

//Uncomment the next line to delete the schema only for testing
//Realm.clearTestState();
export default new Realm({schema: [Litter, Puppy, BreederSchema]});
