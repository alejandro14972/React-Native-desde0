import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Image } from 'react-native';

const icon= require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
    <Image source={icon} style={{width:100, height:100}}/>
      <Text>Bienvenido</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
