import 'expo-dev-client';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-get-random-values';
import {registerGlobals} from 'react-native-webrtc';

import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import LobbyScreen from './src/screens/LobbyScreen';
import RoomScreen from './src/screens/RoomScreen';

registerGlobals();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Room"
          component={RoomScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Lobby"
          component={LobbyScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
