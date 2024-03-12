import { Pressable, View } from "react-native";
import { Button, StyleSheet, Text } from 'react-native';
import AppButtonStyles from "./AppButtonStyles";


export default ({onPress, title, style = {} }) => {

    const styles = AppButtonStyles();

    return (
        <Pressable style={[styles.container, style]} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};


