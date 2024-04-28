import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';

export const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 0.6}}></View>
      </View>
      <Text>
        w: {width}, h: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: 'red',
  },
  purpleBox: {
    width: '50%',
    backgroundColor: '#5856D6',
    height: '50%',
  },
});
