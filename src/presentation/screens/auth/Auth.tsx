import {Button, TextInput} from 'react-native-paper';
import {Image, SafeAreaView, Text, View} from 'react-native';

export const AuthScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{alignItems: 'center'}}>
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
          onPress={() => navigation.navigate('home')}>
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
