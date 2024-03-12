import { View } from "react-native";
import AppStyles from "../../AppStyles";
import { useEffect, useState } from "react";
import { Input } from "@rneui/base";
import AppButton from "../../components/AppButton/AppButton";


export default ({onConnexion}) => {

const styles = AppStyles();

const [email, setEmail] = useState("a@a.com");
const [password, setPassword] = useState("root");


  return (
    <View style={[styles.container, styles.safeArea]}>
        <Input  
        placeholder="Email" 
        textContentType="emailAddress"
        value={email}
        onChangeText={(value) => setEmail(value)}
         />
        <Input secureTextEntry={true}  
        placeholder="Password" 
        textContentType="password"
        value={password}
        onChangeText={(value) => setPassword(value)}
         />
         <AppButton 
         title ="Connexion" 
         style={{width: 100}} 
         onPress={() => onConnexion({email, password})}>
         </AppButton>
    </View>
  );
};