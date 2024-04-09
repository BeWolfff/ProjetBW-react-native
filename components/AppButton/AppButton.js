import { Pressable, View } from "react-native";
import { Button, StyleSheet, Text } from 'react-native';
import AppButtonStyles from "./AppButtonStyles";
import { Icon } from "@rneui/base";


export default ({onPress, title, icon, type = "simple", style = {} }) => {

    const styles = AppButtonStyles();

    return (
        <Pressable style={[styles.container, style]} onPress={onPress}>
            {type == "simple" && <Text style={styles.text}>{title}</Text>}
            {type == "icon" && (
                <Icon 
                name={icon}
                type="font-awesome-5"
                color= "white" 
                size={20}
                style={{padding: 2}}
                ></Icon>
        )}
        </Pressable>
    );
};


