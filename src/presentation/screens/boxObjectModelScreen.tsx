import {Text, View, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}></View>
      {/*<Text style={styles.title}>BoxObjectScreen</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    fontSize: 40,
    paddingVertical: 50,
    borderWidth: 10,
  },

  purpleBox: {
    height: 40,
    marginVertical: 50,
    backgroundColor: 'purple',
  },
});
