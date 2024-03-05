import { StyleSheet } from "react-native";
import { colors } from "../../theme";


export default AppButtonStyles = () => {

    const colorsTheme = theme();

    return StyleSheet.create({

    container: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: "white", 
    },
});
}