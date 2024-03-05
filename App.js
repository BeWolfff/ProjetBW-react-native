import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {Hello} from "./Hello";

export default function App() {

  return (
    <View style={styles.container}>
      <Hello couleur="red" taille={50}></Hello>
      <Hello couleur="blue"></Hello>
      <Hello couleur="green"></Hello>
      <Button title="Clic clic"></Button>
      <StatusBar style="auto" />
    </View>
  );
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
