import { Pressable, View } from "react-native";
import { Button, StyleSheet, Text } from 'react-native';
import styles from "./AppButtonStyles";


export default ({onPress, title}) => {

    return (
        <Pressable style={styles.container} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

