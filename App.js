import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AppButton from "./components/AppButton/AppButton";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStyles from "./AppStyles";

export default function App() {
  const EcranPrincipal = () => {
    const styles = AppStyles();

    const onPressClicMoi = () => {
      console.log("Hello !");
    };

    return (
      <View style={[styles.container, styles.safeArea]}>
        <AppButton title="Clic moi" onPress={onPressClicMoi}></AppButton>
        <StatusBar style="auto" />
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <EcranPrincipal></EcranPrincipal>
    </SafeAreaProvider>
  );
}