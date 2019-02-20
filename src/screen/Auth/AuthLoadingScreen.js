import React, { Component } from 'react';
 import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    Text,
    View,
    Image
} from 'react-native';  

import { connect } from 'react-redux';
import { authGetUser } from '../../store/actions/index';

 
import styles from '../../assets/css/style';

import LogoComponent from '../../component/Logo';

class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        
        if (userToken){
            this.props.onGetUser(userToken);     
            console.log(userToken); 
        }else{
            this.props.navigation.navigate('AppAuthStack');
        } 
    };
    componentWillReceiveProps(props){
        if (props.user !== null) {
            this.props.navigation.navigate('App');
        } else {
            this.props.navigation.navigate('AuthHome'); 
        }  
    }
    // componentDidMount(){
    //     console.log("Auth Loading Screen componentWillReceiveProps Email : ");
    //     console.log(this.props.email);
    // }
    // componentWillMount(){
    //     console.log("Auth Loading Screen componentWillMount Email : ");
    //     console.log(this.props.email);
    // }
    // componentWillUpdate(){
    //     console.log("Auth Loading Screen componentWillUpdate Email : ");
    //     console.log(this.props.email);
    // }
    render() {
         
        return (
            <View style={styles.container}>
                <LogoComponent />
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUser: (token) => dispatch(authGetUser(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);