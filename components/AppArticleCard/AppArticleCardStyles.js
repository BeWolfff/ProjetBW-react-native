import { StyleSheet } from "react-native";
import theme from "../../theme";


export default AppArticleCardStyles = () => {

    const colorsTheme = theme();

    return StyleSheet.create({
    container: {},
    text: {},
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover"
    },
    imageContainer: {
        width: 150,
        height: 200,
    },

});
}