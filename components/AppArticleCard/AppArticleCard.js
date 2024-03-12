import { Image, Pressable, View } from "react-native";
import { Button, StyleSheet, Text } from 'react-native';
import AppArticleCardStyles from "./AppArticleCardStyles";


export default ({onPress, article}) => {

    const styles = AppArticleCardStyles();

    console.log(article);

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.imageContainer}>
            <Image 
            style={styles.image} 
            source={{uri : article.photos[0]}}
            cachePolicy="memory-disk"
            />
            </View>
            <Text>{article.titre}</Text>
            <Text>{article.prix}€</Text>
        </Pressable>
    );
};