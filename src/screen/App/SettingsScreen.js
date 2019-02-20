import React, { Component } from 'react';
import { View, Image, Button, TextInput, TouchableHighlight, Text , AsyncStorage } from 'react-native';

import { connect } from 'react-redux'; 
import { authSignOut } from '../../store/actions/index';

import styles from '../../assets/css/style';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  render() {

    const AvatarImage = this.props.user.photoUrl !== '' ? <Image source={{ uri: this.props.user.photoUrl}} style={styles.previewImage} /> : <Text> No Image </Text>; 


    return (
      <View style={styles.innercontainer}>
        <View style={styles.profilecontainer} >
          <View style={styles.profileImageOuter} >
            <TouchableHighlight 
              style={styles.profileImgContainer}
              onPress={this.pickImageHandler}
            >
              {AvatarImage}
            </TouchableHighlight>
          </View>
          <View style={styles.inputcontainer} >
            <Text style={styles.inputLabel}> Email: {this.props.user.email} </Text>
          </View>
          <View style={styles.inputcontainer} >
            <Text style={styles.inputLabel}> Name: {this.props.user.displayName} </Text>
          </View>
          <TouchableHighlight style={styles.btn} onPress={this._signOutAsync}>
            <Text style={styles.btnText} > Sign Out </Text>
          </TouchableHighlight>  
        </View>   
      </View>
    );
  }
  _signOutAsync = async () => {
      await AsyncStorage.setItem('userToken','');
      this.props.onSignOut();
      this.props.navigation.navigate('Auth');
  }; 
}

 
const mapStateToProps = state => {
  return {
    user: state.auth.user, 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(authSignOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
