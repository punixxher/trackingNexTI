import {DefaultTheme, PaperProvider} from 'react-native-paper';

import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from './screens/auth/Auth.tsx';
import {Home} from './screens/home/Home.tsx';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#88C58D',
    secondary: '#222A56',
  },
};

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
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
  );
};

export default App;
