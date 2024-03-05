import { StyleSheet, Text, View } from 'react-native';

 
 export const Hello = ({couleur, taille}) => {
    return (
      <View>
        <Text style={{color : couleur, fontSize: taille}} > Hello World</Text>
      </View>
    );
  };