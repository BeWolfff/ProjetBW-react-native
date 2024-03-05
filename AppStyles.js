import { StyleSheet } from "react-native";
import theme from "./theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default AppStyles = () => {
  const colorsTheme = theme();
  const margins = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorsTheme.background,
    },
    safeArea: {
      paddingTop: margins.top,
      paddingBottom: margins.bottom,
      paddingLeft: margins.left,
      paddingRight: margins.right,
    },
    centered: {
      alignItems: "center",
      justifyContent: "center",
    },
    itemMenuActif: {
      color: colorsTheme.primary,
    },
    itemMenuInactif: {
      color: colorsTheme.lightGrey,
    },

  });
};