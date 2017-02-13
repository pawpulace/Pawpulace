import React, {Component} from 'react';
import {
  View, Text, StyleSheet, ScrollView, Alert,
  Image, TouchableOpacity, NativeModules, Dimensions,
  Keyboard,
} from 'react-native';

import Video from 'react-native-video';
import Button from 'react-native-button';
const BreederStyle = require('./style/BreederStyleSheet');
var ImagePicker = NativeModules.ImageCropPicker;
import LitterRegistration from './src/PuppyRegistration/LitterRegistration';
import TextField from 'react-native-md-textinput';
import {CustomButton,CommonNavigator, DropDown} from './src/util';

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'white',
    marginBottom: 10
  },
  text: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default class UploadPicture extends React.Component {
  renderScene(route, navigator) {
      return <route.component navigator={navigator} {...route.passProperty} />
  }

  configureScene(route, routeStack) {
          return Navigator.SceneConfigs.PushFromRight
  }

  render() {
      return(
         /* <CommonNavigator component={BreederInformation} name='BreederInformation'/>*/
       <UploadPic  navigator={this.props.navigator} />
      )
  }
}


module.exports =  UploadPicture;


class UploadPic extends Component {

  constructor() {
    super();
    this.state = {
      image: null,
      images: null
    };
  }

  pickSingleWithCamera(cropping) {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 300,
      height: 500,
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  }

  pickSingleBase64(cropit) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      includeBase64: true
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: `data:${image.mime};base64,`+ image.data, width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  }

  cleanupImages() {
    ImagePicker.clean().then(() => {
      console.log('removed tmp images from tmp directory');
    }).catch(e => {
      alert(e);
    });
  }

  cleanupSingleImage() {
    let image = this.state.image || (this.state.images && this.state.images.length ? this.state.images[0] : null);
    console.log('will cleanup image', image);

    ImagePicker.cleanSingle(image ? image.uri : null).then(() => {
      console.log(`removed tmp image ${image.uri} from tmp directory`);
    }).catch(e => {
      alert(e);
    })
  }

  pickSingle(cropit, circular=false) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      cropperCircleOverlay: circular,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 350,
      compressImageQuality: 0.5,
      compressVideoPreset: 'MediumQuality',
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        images: null
      });
    }).catch(e => {
      console.log(e);
      Alert.alert(e.message ? e.message : e);
    });
  }

  pickMultiple() {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      this.setState({
        image: null,
        images: images.map(i => {
          console.log('received image', i);
          return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
        })
      });
    }).catch(e => alert(e));
  }

  scaledHeight(oldW, oldH, newW) {
    return (oldH / oldW) * newW;
  }

  renderVideo(video) {
    return (<View style={{height: 300, width: 300}}>
      <Video source={{uri: video.uri, type: video.mime}}
         style={{position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
         rate={1}
         paused={false}
         volume={1}
         muted={false}
         resizeMode={'cover'}
         onError={e => console.log(e)}
         onLoad={load => console.log(load)}
         repeat={true} />
     </View>);
  }

  renderImage(image) {
    return <Image style={{width: 350, height: 300, resizeMode: 'contain', marginTop: 30}} source={image} />
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }

  onPressNext() {
    this.props.navigator.push({
      component: PuppyEndRegistration,
      name: 'Registration Complete',
    })
  }

  render() {
    return (
      <View style={styles.container}>

      {
        /*<TouchableOpacity onPress={() => this.pickSingleWithCamera(false)} style={styles.button}>
          <Text style={styles.text}>Select Single With Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pickSingle(false)} style={styles.button}>
          <Text style={styles.text}>Select Single</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pickSingleBase64(false)} style={styles.button}>
          <Text style={styles.text}>Select Single Returning Base64</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pickSingle(true)} style={styles.button}>
          <Text style={styles.text}>Select Single With Cropping</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.pickMultiple.bind(this)} style={styles.button}>
          <Text style={styles.text}>Select Multiple</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.cleanupImages.bind(this)} style={styles.button}>
          <Text style={styles.text}>Cleanup All Images</Text>
        </TouchableOpacity>*/
      }
      <View style={{width: 400, height: 300, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <ScrollView>
          {this.state.image ? this.renderAsset(this.state.image) : null}
        </ScrollView>
      </View>
      <View>
      </View>
      <View style={{width: 400, height: 300, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.pickSingleWithCamera(true)} style={styles.button}>
          <Text style={styles.text}>Use Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pickSingle(true, true)} style={styles.button}>
          <Text style={styles.text}>Upload from Library</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.cleanupSingleImage.bind(this)} style={styles.button}>
          <Text style={styles.text}>Delete Image</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressNext()} style={styles.button}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
      <View>
      </View>
    </View>
    );
  }
}

class PuppyEndRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thankyouText: ' Thank you for registering your puppies with us!',
       bodyText: 'You will receive an email if someone wants to adopt this cute pup.'
    }
  }

  render() {
  return(
      <View style={BreederStyle.PageStyle.container}>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}} >
            {this.state.thankyouText}
          </Text>
          <Text>
            {this.state.bodyText}
          </Text>
        </View>
      </View>
    )
  };
}
