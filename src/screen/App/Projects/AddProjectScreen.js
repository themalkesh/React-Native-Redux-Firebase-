import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage, TextInput, TouchableOpacity, TouchableHighlight, Image, ActivityIndicator } from "react-native";
import ImagePicker from "react-native-image-picker";

import { connect } from 'react-redux';
import { addProject, getProjects, setProjects } from '../../../store/actions/index';

import styles from '../../../assets/css/style';
 

class AddProjectScreen extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            title:   '',
            image: { uri:  '' },
            imagebase64: null,
            description: '',
        }
    }

    static navigationOptions = ({ navigation  }) =>  {
        return {
            title: 'Add Project',
            headerRight: (
                <TouchableOpacity onPress={() => { navigation.navigate('Home')  }} >
                    <Text
                        style={styles.addProject} 
                        color="#fff" 
                    > Back </Text>
                </TouchableOpacity>

            ),
            headerLeft: (null)
        }
    };

    pickImageHandler = () => {
        ImagePicker.showImagePicker({ title: "Pick an Image" }, res => {
            if (res.didCancel) {
                console.log("User cancelled!");
            } else if (res.error) {
                console.log("Error", res.error);
            } else {
                this.setState({
                    image: { uri: res.uri },
                    imagebase64: res.data
                });
                 
            }
        });
    }

 
    render() {
        const ProjectImage = this.state.image.uri !== '' ? <Image source={this.state.image} style={styles.previewImage} /> : <Text style={styles.previewImageText}>Project Image</Text>;
        const projectLoading = this.props.isloading ? <ActivityIndicator size="large" color="#0000ff" /> : <TouchableHighlight style={styles.btn} onPress={this._saveProject}>
            <Text style={styles.btnText} > Save Project </Text>
        </TouchableHighlight>;

        return (
            <View style={styles.innercontainer}>
                <View style={styles.profilecontainer} >
                    <View style={styles.profileImageOuter} >
                        <TouchableHighlight
                            style={styles.profileImgContainer}
                            onPress={this.pickImageHandler}
                        >
                            {ProjectImage}
                        </TouchableHighlight>
                    </View>
                     
                    <View style={styles.inputcontainer} >
                        <Text style={styles.inputLabel}> Project Name: </Text>
                        <TextInput
                            value={this.state.title}
                            style={styles.textInput}
                            placeholder="Your Awesome Project Name"
                            autoFocus={true}
                            onChangeText={(title) => { this.setState({ title: title }) }}
                        />
                    </View>
                    <View style={styles.inputcontainer} >
                        <Text style={styles.inputLabel}> Project Description: </Text>
                        <TextInput
                            value={this.state.description}
                            style={[styles.textInput, styles.textAreaInput]}
                            placeholder="Your Awesome Project Description"
                            autoFocus={false}
                            onChangeText={(description) => { this.setState({ description: description }) }}
                            multiline={true}
                        />
                    </View>
                    {projectLoading}
                </View>

            </View>
        );
    }

    __backToProject = () => {
        this.props.navigation.navigate('Home')
    }
    _saveProject = async () => {
         

        if (this.state.title.trim() === "") {
            return;
        }
        const projectData = {
            title: this.state.title,
            image: this.state.image,
            imagebase64: this.state.imagebase64,
            description: this.state.description,
        }
        this.props.onAddProject(projectData);
    };

    componentWillReceiveProps(props) {
        // if (props.user !== null) { 
        //     this.state.name = props.user.displayName; 
        // }
    }

    componentDidMount() {  
        // if (this.props.user !== null) {
        //     this.state.name = this.props.user.displayName;
        // }
        this.props.navigation.setParams({ backToProject: this._backToProject });
    }
    
}

const mapStateToProps = state => {

    return {
        
        isloading: state.project.isloading,
    }
} 
 
 
const mapDispatchToProps = dispatch => {
  return {
      onAddProject: (projectData) => dispatch(addProject(projectData)),
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectScreen);
 