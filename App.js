import React from 'react';
import { setNavigator } from './src/navigationRef';
import LoaderScreen from './src/screens/LoaderScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import AccountScreen from './src/screens/AccountScreen';
import NetworkScreen from './src/screens/NetworkScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { createStackNavigator } from 'react-navigation-stack';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { startNetworkLogging } from 'react-native-network-logger';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const switchNavigator = createSwitchNavigator({
  loaderScreen: LoaderScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  network: NetworkScreen,
  mainFlow: createBottomTabNavigator({
    Account: AccountScreen,
    TrackCreate: TrackCreateScreen,
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  startNetworkLogging();
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
