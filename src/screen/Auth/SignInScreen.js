import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image, TouchableHighlight } from "react-native";

import { connect } from 'react-redux';
import { authLogin } from '../../store/actions/index';

import styles from '../../assets/css/style';

import LogoComponent from '../../component/Logo';

class SignInScreen extends Component {
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
                            onChangeText={(email) => { this.setState({ email: email })}}  
                        />
                        <TextInput 
                            value={this.state.password} 
                            style={styles.textInput} 
                            placeholder="Password" 
                            secureTextEntry={true} 
                            textContentType="password" 
                            onChangeText={(password) => { this.setState({ password : password }) }}  
                        />
                    </View> 
                    <TouchableHighlight style={styles.btn} onPress={this._signInAsync}>
                    <Text style={styles.btnText} > Sign In </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.btncontainer} >
                <TouchableHighlight style={[styles.btnSecondary]} onPress={this._showForgotScreen}>
                    <Text style={styles.btnSecondaryText} > Forgot Password </Text>
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
    _showForgotScreen = () => {
        this.props.navigation.navigate('ForgotPassword');
    };
    _showRegisterScreen = () => {
        this.props.navigation.navigate('Register');
    };
    _signInAsync = async () => {

        if (this.state.email.trim() === "" || this.state.password.trim() === "" ) {
            return;
        }
        const loginData = {
            email: this.state.email,
            password : this.state.password
        }
        
        this.props.onLogin(loginData);
        
    };

    componentWillReceiveProps(props) {
        if (props.user !== null) {
            this.props.navigation.navigate('App');
        }  
    }
}
 
const mapStateToProps = state => {
    return { 
        user: state.auth.token  
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (loginData) => dispatch(authLogin(loginData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);