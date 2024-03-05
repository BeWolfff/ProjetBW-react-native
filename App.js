import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Hello/>
      <StatusBar style="auto" />
    </View>
  );
}

const Hello = function() {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monTexte : { 
    color: "blue",
  },

});
