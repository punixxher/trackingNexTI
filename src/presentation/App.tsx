// App.tsx

import React, {useState, useEffect, useReducer, createContext} from 'react';
import {Alert, SafeAreaView, AppState} from 'react-native';
import * as Keychain from 'react-native-keychain';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import {AuthScreen} from './screens/auth/Auth.tsx';
import {Home} from './screens/home/Home.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#88C58D',
    secondary: '#222A56',
  },
};

const Stack = createNativeStackNavigator();

interface AppState {
  sessionData: any;
}

// Define the action types
type Action = {type: 'LOGINUSER'} | {type: 'LOGOUT'};

// Create the initial state
const initialState: AppState = {
  sessionData: {
    user: 'Daniel',
  },
};

const appReducer = (
  state: AppState,
  action: Action,
  data: string,
): AppState => {
  switch (action.type) {
    case 'LOGINUSER':
      return {...state, sessionData: data};
    case 'LOGOUT':
      return {...state, sessionData: data};
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const App: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus(); // Check if user is already logged in when the component mounts
  }, []);

  const checkLoginStatus = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();

      if (credentials && credentials.username && credentials.password) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await Keychain.resetGenericPassword();
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error logging out:', error);
      Alert.alert('Error', 'An error occurred while logging out');
    }
  };

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <SafeAreaView style={{flex: 1, backgroundColor: '#F2F2F2'}}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="auth" component={AuthScreen} />
                <Stack.Screen name="home" component={Home} />



            </Stack.Navigator>
          </SafeAreaView>
        </PaperProvider>
      </NavigationContainer>
    </AppContext.Provider>

    /*
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {isLoggedIn ? (
            <>
              <Text>Welcome, {username}!</Text>
              <Button title="Logout" onPress={handleLogout} />
            </>
          ) : (
            <>
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}
              />
              <Button title="Login" onPress={handleLogin} />
            </>
          )}
        </View>
    */
  );
};

export default App;
