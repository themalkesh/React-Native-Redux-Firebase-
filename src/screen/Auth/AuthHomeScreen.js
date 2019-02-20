import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableHighlight } from 'react-native';
 
import styles from '../../assets/css/style';

 

import LogoComponent from '../../component/Logo';

class AuthHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };  
  }
  render() {
    return (
      <View style={styles.container} >
        <LogoComponent />
        <View style={styles.btncontainer} >
          <TouchableHighlight style={styles.btn} onPress={this._showLoginScreen}>
            <Text style={styles.btnText} > Sign In </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.btncontainer}>
          <TouchableHighlight style={[styles.btnSecondary]} onPress={this._showRegisterScreen}>
            <Text style={styles.btnSecondaryText} > Sign Up </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  _showLoginScreen = () => {
    this.props.navigation.navigate('SignIn');
  };
  _showRegisterScreen = () => {
    this.props.navigation.navigate('Register');
  };
}
  
export default AuthHomeScreen;
 