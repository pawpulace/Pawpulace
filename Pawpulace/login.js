import React from 'react';
import {AppRegistry, View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';

var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock({clientId: '5r8tzNb2E9bDtF2gIeUc0hDj76dC6EAw', domain: 'miroy.auth0.com'});

var HeaderView = React.createClass({
  render: function() {
    return (
      <View style={styles.header}>
      <Text style={styles.title}>Welcome to Pawpulace</Text>
      </View>
    );
  }
});

var TokenView = React.createClass({
  render () {
    return (
      <View style={styles.tokenContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{this.props.username}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{this.props.email}</Text>
        <Text style={styles.label}>JWT:</Text>
        <Text style={styles.value}>{this.props.jwt}</Text>
        <Text style={styles.label}>Refresh Token:</Text>
        <Text style={styles.value}>{this.props.refreshToken}</Text>
      </View>
    );
  }
});

var Login = React.createClass({
  render() {
    return (
      <View style={styles.header}>
      <Text style={styles.title}>Welcome to Pawpulace</Text>
      </View>
    );
  }
});

var Login = React.createClass({
  getInitialState: function() {
    return {
        logged: false,
    };
  },
  render: function() {
    if (this.state.logged) {
      return (
        <View style={styles.container}>
        <HeaderView/>
        <TokenView
        style={styles.token}
        username={this.state.profile.name}
        email={this.state.profile.email}
        jwt={this.state.token.idToken}
        refreshToken={this.state.token.refreshToken}
        />
        <View style={styles.actionContainer}>
          <TouchableHighlight style={styles.actionButton} onPress={() => this._onBreederInfo()}>
            <Text style={styles.actionButtonText}>Breeder</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.actionButton} onPress={() => this._onPetParentInfo()}>
            <Text style={styles.actionButtonText}>Pet Parent</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.actionButton} onPress={() => this._onPuppyInfo()}>
            <Text style={styles.actionButtonText}>Puppy</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.actionContainer}>
          <TouchableHighlight style={styles.actionButton} onPress={this._onUserInfo}>
            <Text style={styles.actionButtonText}>Greet</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.actionButton} onPress={this._onRefresh}>
            <Text style={styles.actionButtonText}>Refresh</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.actionButton} onPress={this._onLogout}>
            <Text style={styles.actionButtonText}>Logout</Text>
          </TouchableHighlight>
        </View>
        </View>
      );
    }
    return (
        <View style={styles.container}>
          <HeaderView/>
          <View style={styles.actionContainer}>
            <TouchableHighlight style={styles.actionButton} onPress={this._onShowLock}>
              <Text style={styles.actionButtonText}>Sign Up/Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    },
   _onShowLock: function() {
   lock.show({
       closable: true,
       authParams: {
         scope: "openid email offline_access",
       },
     }, (err, profile, token) => {
     if (err) {
       console.log(err);
       return;
     }
     this.setState({
       token: token,
       profile: profile,
       logged: true,
       });
     });
     this.props.navigator.push({
       name: 'WelcomeBreeder',
     })
   },
   _onLogout: function() {
     this.setState({logged: false});
   },
   _onRefresh: function() {
     console.log("Refresh token " + this.state.token.idToken);
     lock.authenticationAPI()
     .refreshToken(this.state.token.refreshToken)
     .then(response => {
           let token = this.state.token;
           token.idToken = response.idToken;
           this.setState({token: token});
           console.log(response);
           })
     .catch(error => console.log(error));
   },
   _onUserInfo: function() {
     const token = this.state.token.accessToken;
     console.log("Fetching user info with token " + token);
     lock
     .authenticationAPI()
     .userInfo(token)
     .then(profile => {
           Alert.alert(
                       `Hi ${profile.name}`,
                       `Your email is ${profile.email}`,
                       [
                        {text: 'OK', onPress: () => {}},
                        ]
                       )
           })
     .catch(error => console.log(error));
   },
   _onBreederInfo() {
     this.props.navigator.push({
       name: 'WelcomeBreeder',
     })
   },
   _onPetParentInfo() {
     this.props.navigator.push({
       name: 'WelcomePetParent',
     })
   },
   _onPuppyInfo() {
     this.props.navigator.push({
       name: 'PuppyRegistration',
     })
   },
 });

var styles =
StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  token: {
    flex: 1,
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
  },
  actionButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16214D',
    borderRadius: 5,
    margin: 8,
  },
  actionButtonText: {
    color: '#ffffff',
  },
  message: {
    fontFamily: 'HelveticaNeue-Thin',
    fontSize: 14,
    alignSelf: 'center',
  },

  // Token View
  tokenContainer: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#D0D2D3',
    margin: 8,
    padding: 10,
  },
  label: {
    fontFamily: 'HelveticaNeue-Medium',
    marginTop: 10,
  },
  value: {
    fontFamily: 'HelveticaNeue-Light',
    alignSelf: 'center',
  },

  // Header View
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 20,
  },
  logo: {
    height: 70,
    width: 191
  },

  });

module.exports = Login;
