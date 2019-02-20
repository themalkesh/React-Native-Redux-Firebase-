import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage, FlatList, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

import { connect } from 'react-redux';
import { addProject, getProjects, setProjects } from '../../../store/actions/index';

import styles from '../../../assets/css/style';
 
 class HomeScreen extends Component { 

     constructor(props) {
         super(props);
         this.state = {
             
         }
        
     }
    
     static navigationOptions = ({ navigation }) => ({
         title: 'Projects',
         headerRight: ( 
             <TouchableOpacity onPress={() => { navigation.navigate('addProject') }} >
                 <Text
                     style={styles.addProject} 
                     color="#fff"
                 > Add Project </Text>
             </TouchableOpacity>
             
         ), 
         headerLeft : (null)
     }); 
 
     
    renderItem = ({ key, item }) => { 
        if(item){ 
            const itemImage = item.image ? <Image source={item.image} style={styles.previewImage} /> : <Text style={styles.previewImageText}>Project Image</Text>;
            return (
                <View style={styles.listItemContainer} >
                    <View style={styles.listItem}>
                        <View style={styles.listImage}>
                            <View style={styles.profileImageOuter} >
                                <View style={styles.profileImgContainer}>
                                    {itemImage}
                                </View>
                            </View>
                        </View> 
                        <View style={styles.listContent}>
                            <View style={styles.listTitleContent}>
                                <Text style={styles.listTitle}>{item ? item.title : ''}</Text>
                            </View>
                            <View style={styles.listDescriptionContent}>
                                <Text style={styles.listDescription}>{item ? item.description : ''}</Text>
                            </View>
                        </View>
                    </View>

                </View>
            );
        }
    };
    render() {

        const projectLoading = this.props.isloading ? <ActivityIndicator size="large" color="#0000ff" /> : <FlatList

            data={this.props.projects}
            renderItem={this.renderItem}
            contentContainerStyle={styles.flatList}
        />;

        return (
            <View style={styles.innercontainer}>
                <View style={styles.flatListContainer}>

                    {projectLoading}

                    
                </View>
                {/* <Button title="Show me more of the app" onPress={this._showMoreApp} /> */}
                
            </View>
        );
    }
     componentWillReceiveProps(props) {
         console.log(props)
     }
     componentDidMount() {
         this._getProjects(); 
    }

    // _showMoreApp = () => {
    //     this.props.navigation.navigate('Other');
    // };

    // _signOutAsync = async () => {
    //     await AsyncStorage.clear();
    //     this.props.navigation.navigate('Auth');
    // };
     _getProjects = async () => {
          
         this.props.onGetProjects();
     };
}
  

const mapStateToProps = state => {

    return {
        projects: state.project.projects,
        isloading: state.project.isloading,
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        onGetProjects: () => dispatch(getProjects()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
 