import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import { Button} from 'react-native';
import HomeScreen from './Projects/Route';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
 
const AppTabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen
    },
    {
        initialRouteName: 'Home' ,
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                headerTitle: routeName
            };
        }
    });

// const AppStackNavigator = createStackNavigator(
//     {
//         AppTabNavigator: AppTabNavigator    
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => {
//             return {
//                 headerLeft: (  
//                     <Button 
//                         onPress={() => navigation.openDrawer()}
//                         title="Menu" 
//                         color="#000"
//                     />
//                 ),
//                 headerStyle: {
//                     backgroundColor: '#f4511e',
                    
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                     fontWeight: 'bold',
//                     color: '#fff'
//                 },
//             };
//         }
//     }
// );

  

const AppDrawerNavigator = createDrawerNavigator({
    App: {
        screen: AppTabNavigator 
    }
});
   
export default createAppContainer(AppDrawerNavigator);  