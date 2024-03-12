import { Image, Pressable, View } from "react-native";
import { Button, StyleSheet, Text } from 'react-native';
import AppArticleCardStyles from "./AppArticleCardStyles";


export default ({onPress, article}) => {

    const styles = AppArticleCardStyles();

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.imageContainer}>
            <Image 
            style={styles.image} 
            source={{uri : article.thumbnail}}
            cachePolicy="memory-disk"
            />
            </View>
            <Text>{article.title}</Text>
            <Text>{article.price}€</Text>
        </Pressable>
    );
};