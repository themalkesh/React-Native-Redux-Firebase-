import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image, TouchableHighlight } from "react-native";

import { connect } from 'react-redux';
import { authForgotPassword } from '../../store/actions/index';

 
import styles from '../../assets/css/style';

import LogoComponent from '../../component/Logo';

class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'themalkesh@gmail.com' 
    }
  }

  render() {
    return (
      <View style={styles.container} >

        <LogoComponent />
        <View style={styles.logincontainer} >
          <View style={styles.inputcontainer} >
            <TextInput
              value={this.state.email}
              style={styles.textInput}
              placeholder="Email Address"
              autoFocus={true}
              onChangeText={(email) => { this.setState({ email: email }) }}
            />
          </View>
          <TouchableHighlight style={styles.btn} onPress={this._signInAsync}>
            <Text style={styles.btnText} > Reset Password </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.btncontainer} >
           
          <TouchableHighlight style={[styles.btnSecondary]} onPress={this._showLoginScreen}>
            <Text style={styles.btnSecondaryText} > Sign In </Text>
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
  _signInAsync = async () => {

    if (this.state.email.trim() === "") {
      return;
    }
    const forgotData = {
      email: this.state.email,
    }
    console.log(forgotData);
    this.props.onForgotPassword(forgotData);
    if (this.props.token !== "") {
      console.log("user logedin");
      this.state.email = "";
      //this.props.navigation.navigate('App');
    }
  };
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onForgotPassword: (forgotData) => dispatch(authForgotPassword(forgotData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);