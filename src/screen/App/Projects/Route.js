import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import { Button} from 'react-native';
import HomeScreen from './HomeScreen';
import AddProjectScreen from './AddProjectScreen';
 
 
 

const AppStackNavigator = createStackNavigator(
    {
        Home: HomeScreen,  
        addProject: AddProjectScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (   
                    <Button  
                        onPress={() => navigation.openDrawer()}
                        title="Menu" 
                        color="#000" 
                    />
                ),
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#fff'
                },
            };
        }
    }
);

 
const AppDrawerNavigator = createDrawerNavigator({
    App: {
        screen: AppStackNavigator 
    }
});
   
export default createAppContainer(AppDrawerNavigator);  