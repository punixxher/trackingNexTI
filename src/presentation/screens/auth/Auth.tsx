import {Button, TextInput} from 'react-native-paper';
import {Alert, Image, SafeAreaView, Text, View} from 'react-native';
import Keychain from 'react-native-keychain';
import {useContext, useState} from 'react';
import {AppContext} from '../../App.tsx';

const useAppContext = () => useContext(AppContext);

export const AuthScreen = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {state, dispatch} = useAppContext();

  const handleLogin = async () => {
    try {
      // Simulate API call to authenticate user
      const isAuthenticated = await authenticateUser(username, password);
      setIsLoggedIn(true);
      navigation.navigate('home', {name: 'Jane'});
      return
      if (isAuthenticated) {
        await Keychain.setGenericPassword(username, password);
        setIsLoggedIn(true);
      } else {
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'An error occurred while logging in');
    }
  };

  const authenticateUser = async (username: string, password: string) => {
    // Simulate API call to authenticate user (replace with your actual authentication logic)
    return username === 'user' && password === 'password';
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Text>{state.sessionData.name}</Text>
        <Image
          source={require('../../../presentation/img/logo1.png')}
          style={{width: 180, height: 148}}
        />
      </View>
      <View
        style={{
          marginTop: 120,
          margin: 50,
        }}>
        <TextInput mode="outlined" label="Usuario" placeholder="" />
        <TextInput
          secureTextEntry={true}
          style={{marginTop: 10}}
          mode="outlined"
          label="Contraseña"
          placeholder=""
        />
        <Button
          style={{marginTop: 30, margin: 40}}
          mode="contained"
          onPress={() => handleLogin()}>
          Ingresar
        </Button>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}>
        <Text>@2024 NexTi</Text>
      </View>
    </SafeAreaView>
  );
};
