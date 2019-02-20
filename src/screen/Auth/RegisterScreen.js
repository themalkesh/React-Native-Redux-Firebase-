import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image, TouchableHighlight } from "react-native";

import { connect } from 'react-redux';
import { authSignUp } from '../../store/actions/index';

 
import styles from '../../assets/css/style';

import LogoComponent from '../../component/Logo';

class RegisterScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'themalkesh@gmail.com',
            password: '123456'
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
                        <TextInput
                            value={this.state.password}
                                style={styles.textInput}
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType="password"
                            onChangeText={(password) => { this.setState({ password: password }) }}
                        />
                    </View>
                     
                    <TouchableHighlight style={styles.btn} onPress={this._signInAsync}>
                        <Text style={styles.btnText} > Sign Up </Text>
                    </TouchableHighlight>
            </View>
            <View style={styles.btncontainer} >
                <TouchableHighlight style={[styles.btnSecondary]} onPress={this._showLoginScreen}>
                    <Text style={styles.btnSecondaryText} > Sign In </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.btncontainer}>           
                <TouchableHighlight style={[styles.btnSecondary]} onPress={this._showForgotScreen}>
                    <Text style={styles.btnSecondaryText} > Forgot Password </Text>
                </TouchableHighlight>
            </View>
            </View >
        );
    }
    _showForgotScreen = () => {
        this.props.navigation.navigate('ForgotPassword');
    };
    _showLoginScreen = () => {
        this.props.navigation.navigate('SignIn');
    };
    _signInAsync = async () => {

        if (this.state.email.trim() === "" || this.state.password.trim() === "") {
            return;
        } 
        const signUpData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(signUpData);
        this.props.onSignUp(signUpData);
        if (this.props.token !== "") {
            console.log("user signup");
            this.state.email = "";
            this.state.password = "";
            this.props.navigation.navigate('SignIn');
        }
    };
}


const mapStateToProps = state => {
    return {
        token: state.auth.token,
        email: state.auth.email,
         
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (signUpData) => dispatch(authSignUp(signUpData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);