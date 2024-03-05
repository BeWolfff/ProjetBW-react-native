import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import AppButton from "./components/AppButton/AppButton";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStyles from "./AppStyles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const NavigationPrincipale = createBottomTabNavigator();
  const EcranPrincipal = () => {
    const styles = AppStyles();
    const onPressClicMoi = () => {
      console.log("Hello !");
    };
    return (
      <View style={[styles.safeArea, styles.container]}>
        <AppButton title="Clic moi" onPress={onPressClicMoi}></AppButton>
        <StatusBar style="auto" />
      </View>
    );
  };
  const EcranAutre = () => {
    return (
      <View>
        <Text>Autre écran</Text>
      </View>
    );
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationPrincipale.Navigator>
          <NavigationPrincipale.Screen name="main" component={EcranPrincipal} />
          <NavigationPrincipale.Screen name="other" component={EcranAutre} />
        </NavigationPrincipale.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}