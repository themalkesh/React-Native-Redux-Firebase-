import React, { Component } from 'react';
import { View, Image, Button, TextInput, TouchableHighlight, Text, ActivityIndicator } from "react-native"; 
import ImagePicker from "react-native-image-picker";

import { connect } from 'react-redux';
import { profileUpdate } from '../../store/actions/index';

import styles from '../../assets/css/style';

class ProfileScreen extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user ? this.props.user.displayName : '',
      avatar: { uri: this.props.user ? this.props.user.photoUrl : '' },
      avatarbase64: null
    }
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: "Pick an Image" }, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error); 
      } else {
        this.setState({
          avatar: { uri: res.uri },
          avatarbase64: res.data
        }); 
        //this.props.onImagePicked({ uri: res.uri, base64: res.data });
      }
    });
  }

  render() {

    const AvatarImage = this.state.avatar.uri !== '' ? <Image source={this.state.avatar} style={styles.previewImage} /> : <Text>Upload</Text>; 
    const profileLoading = this.props.profileLoading ? <ActivityIndicator size="large" color="#0000ff" /> : <TouchableHighlight style={styles.btn} onPress={this._updateProfileAsync}>
      <Text style={styles.btnText} > Update Profile </Text>
    </TouchableHighlight>;
    return (
      <View style={styles.innercontainer}> 
        <View style={styles.profilecontainer} >
           <View style={styles.profileImageOuter} >
            <TouchableHighlight
              style={ styles.profileImgContainer }
              onPress={this.pickImageHandler}
            >
              {AvatarImage}
            </TouchableHighlight>
          </View>
          <View style={styles.inputcontainer} >
            <Text style={styles.inputLabel}> Email: {this.props.user.email}  </Text>
          </View>
          <View style={styles.inputcontainer} >
            <Text style={styles.inputLabel}> Name: </Text>
            <TextInput
              value={this.state.name}
              style={styles.textInput}
              placeholder="Name"
              autoFocus={true}
              onChangeText={(name) => { this.setState({ name: name }) }}
            />
          </View>
          {profileLoading}
        </View>
        
      </View>
    );
  }
  _updateProfileAsync = async () => {

    if (this.state.name.trim() === "" ) {
      return;
    }
    const profileData = {
      name: this.state.name,
      avatar: this.state.avatar, 
      avatarbase64: this.state.avatarbase64, 
    }
    //console.log(profileData);
    this.props.onProfileUpdate(profileData);
    // if (this.props.token !== "") {
    //   console.log("user logedin");
    //   this.state.email = "";
    //   this.state.password = "";
    //   this.props.navigation.navigate('App');
    // }
  };

  componentWillReceiveProps(props) {
    
    if (props.user !== null) {
      this.state.name = props.user.displayName;
    }  
  } 

  componentDidMount(){
    if (this.props.user !== null) {
      this.state.name = this.props.user.displayName;
    }       
    
  }

}

 
 
const mapStateToProps = state => {
  
  return { 
    user: state.auth.user, 
    profileLoading: state.auth.profileLoading, 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onProfileUpdate: (profileData) => dispatch(profileUpdate(profileData)),
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
 