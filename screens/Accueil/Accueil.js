import { Text, View } from "react-native";
import AppStyles from "../../AppStyles";


export default () => {
  const appStyles = AppStyles();
  return (
    <View style={[appStyles.container, appStyles.centered]}>
      <Text>Accueil</Text>
    </View>
  );
};