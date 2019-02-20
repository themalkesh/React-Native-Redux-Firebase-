import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import logo from '../assets/image/logo.png';
import styles from '../assets/css/style';

export default class LogoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.logocontainer} >
            <Image source={logo} style={styles.logo} resizeMode='contain' />
            <Text style={styles.logotext} > Web and Mobile App development Company </Text>
        </View>
    );
  }
}
