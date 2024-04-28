import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import {Button} from 'react-native-paper';
import GetLocation from 'react-native-get-location';

export const Home = () => {
  const [date, setDate] = useState(dayjs().locale('es'));

  useEffect(() => {
    let timer = setInterval(() => {
      setDate(dayjs().locale('es'));
    }, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  const getLocation = async () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.date}>{date.format('dddd, DD MMMM')}</Text>
        <Text style={styles.time}>{date.format('hh:mm')}</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
        }}>
        <Text>
          <Button mode="contained" onPress={() => getLocation()}>
            Marcar entrada
          </Button>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
  },
  date: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
  },
  time: {
    fontSize: 82,
    fontWeight: 'bold',
    color: '#000000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 75,
  },
  icon: {
    backgroundColor: '#00000050',
    width: 50,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
