import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import AuthHomeScreen from './AuthHomeScreen';
import SignInScreen from './SignInScreen';
import RegisterScreen from './RegisterScreen'; 
import ForgotPasswordScreen from './ForgotPasswordScreen';
import ResetPasswordScreen from './ResetPasswordScreen';
import AuthLoadingScreen from './AuthLoadingScreen';



const AppAuthStack = createStackNavigator({
        AuthHome: AuthHomeScreen,
        SignIn: SignInScreen,
        Register: RegisterScreen,
        ForgotPassword: ForgotPasswordScreen,
        ResetPassword: ResetPasswordScreen
    },
    {
        initialRouteName: 'AuthHome',
        defaultNavigationOptions: {
            header: null
        }
    });

const AppAuthSwitch = createSwitchNavigator({
        AuthLoading: AuthLoadingScreen,     
    },
    {
        initialRouteName: 'AuthLoading',
    });
  
export default createAppContainer(createSwitchNavigator(
    {
        AppAuthStack: AppAuthStack,
        AppAuthSwitch: AppAuthSwitch 
    },
    {
        initialRouteName: 'AppAuthSwitch',
        
    }
));