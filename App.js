import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import { connect } from 'react-redux';
import { authLogin } from './src/store/actions/index';

import AppStack from './src/screen/App/Route';
import AuthStack from './src/screen/Auth/Route';
import WelcomeScreen from './src/screen/Welcome/WelcomeScreen';
 


const AppContainer = createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    Welcome: WelcomeScreen
  },
  {
    initialRouteName: 'Welcome',
  }
))

// export default AppContainer;

const mapStateToProps = state => {
  return {
    tocken: state.auth.tocken,
    mobile: state.auth.mobile,
    password: state.auth.password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (loginData) => dispatch(authLogin(loginData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);