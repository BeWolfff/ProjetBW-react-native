import { Text, View } from "react-native";
import AppStyles from "../../AppStyles";
import AppButton from "../../components/AppButton/AppButton";


export default ({onDeconnexion}) => {
  const appStyles = AppStyles();
  return (
    <View style={[appStyles.container, appStyles.centered]}>
      <Text>Profil</Text>
      <AppButton onPress={onDeconnexion} title="Deconnexion" />
    </View>
  );
};