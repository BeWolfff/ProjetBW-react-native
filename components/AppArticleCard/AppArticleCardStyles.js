import { StyleSheet } from "react-native";
import theme from "../../theme";


export default AppArticleCardStyles = () => {

    const colorsTheme = theme();

    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
        },
    text: {},
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover"
    },
    imageContainer: {
        width: 200,
        height: 150,
    },

});
}