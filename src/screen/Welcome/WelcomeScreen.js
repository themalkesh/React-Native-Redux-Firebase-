import React, { Component } from 'react';
import { View, Text, AsyncStorage, Image, Button, TouchableHighlight } from 'react-native';

import logo from '../../assets/image/logo.png';
import styles from '../../assets/css/style';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const WelcomeScreenLoaded = await AsyncStorage.getItem('WelcomeScreenLoaded');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    if (WelcomeScreenLoaded){
      this.props.navigation.navigate('Auth');
    }
    
  };
  _continue = () => {
    AsyncStorage.setItem('WelcomeScreenLoaded','true');
    this.props.navigation.navigate('Auth');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer} >
          <Image source={logo} style={styles.logo} resizeMode='contain' />
          <Text style={styles.logotext} > Web and Mobile App development Company </Text>
        </View> 
        <View style={styles.btncontainer}>
        {/* <Button title="Let's Continue" onPress={this._continue} /> */}
        <TouchableHighlight style={styles.btn} onPress={this._continue}>
          <Text style={styles.btnText} > Let's Continue </Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}
