import { Pressable, View } from "react-native";
import { Button, StyleSheet, Text } from 'react-native';
import AppInputTextStyles from "./AppInputTextStyles";
import { Controller } from "react-hook-form";
import { Input } from "@rneui/base";


export default ({
    control, 
    name, 
    defaultValue, 
    rules, label, 
    style = {},
    multiline = false,
    numberOfLine = 0,
}) => {

    const styles = AppInputTextStyles();

    return (
        <Controller 
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={rules}
        render={({field:{onChange, onBlur, value}})=> (
          <Input label={label} 
          style={{margin:0, padding:0}} 
          onBlur={onBlur}
          onChangeText={(text) => onChange(text)}
          value={value}    
          multiline = {multiline}
          numberOfLine = {numberOfLine}
          errorMessage={
            control._formState.errors[name]
            ? control._formState.errors[name].message
            :""
            } 
          />
        )}
        />
  
        );
};


