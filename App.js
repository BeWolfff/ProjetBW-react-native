import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import {Hello} from './Hello';
import AppButton from './components/AppButton/AppButton';
import theme from './theme';

export default function App() {

const colors = theme();

  const onPressClic = () => {
    console.log("Salut :)");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    monTexte : { 
      color: "blue",
    },
  
  });
  
  return (
    <View style={styles.container}>
      <Hello couleur="red" taille={50}></Hello>
      <Hello couleur="blue"></Hello>
      <Hello couleur="green"></Hello>
      <Button title="Clic clic clic"></Button>
      <StatusBar style="auto" />
    </View>
  );



}

