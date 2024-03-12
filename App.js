import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import AppButton from "./components/AppButton/AppButton";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStyles from "./AppStyles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Accueil from "./screens/Accueil/Accueil";
import Chercher from "./screens/Chercher/Chercher";
import Vendre from "./screens/Vendre/Vendre";
import Message from "./screens/Message/Message";
import Profil from "./screens/Profil/Profil";
import { Icon } from "@rneui/base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Connexion from "./screens/Connexion/Connexion";


export default () => {

  const [connecte, setConnecte]=useState(false);

  const onConnexion = (data) => {
  
    fetch("http://192.168.155.162:4000/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"content-type": "application/json"},
    })
    .then((result) => result.json())
    .then((result) => console.log(result.jwt));
  }


  const NavigationPrincipale = createBottomTabNavigator();
  const NavigationConnexion = createNativeStackNavigator();

  const EcransConnexions = () => {
    const ConnexionProps = () => (
      <Connexion onConnexion={onConnexion}></Connexion>
    );

    return (
      <NavigationConnexion.Navigator>
        <NavigationConnexion.Screen
        component={ConnexionProps}
        name="connexion"
        />

      </NavigationConnexion.Navigator>
    )

    }
  
  const EcransPrincipaux = () => {

    const styles = AppStyles();

    return (
      <NavigationPrincipale.Navigator>
        <NavigationPrincipale.Screen 
          options={{
            headerShown: false,
            tabBarIcon : ({color}) => {
              return (<Icon type= "material" name="home" color={color}></Icon>);
            },
            tabBarActiveTintColor : styles.itemMenuActif.color,
            tabBarInactiveTintColor : styles.itemMenuInactif.color,
            }}
          name="accueil" 
          component={Accueil} 
        />
        <NavigationPrincipale.Screen 
                  options={{
                    headerShown: false,
                    tabBarIcon : ({color}) => {
                      return (<Icon type= "material" name="loupe" color={color}></Icon>);
                    },
                    tabBarActiveTintColor : styles.itemMenuActif.color,
                    tabBarInactiveTintColor : styles.itemMenuInactif.color,
                    }}
        name="chercher" 
        component={Chercher} />
        <NavigationPrincipale.Screen 
          options={{
            headerShown: false,
            tabBarIcon : ({color}) => {
              return (<Icon type= "material" name="euro" color={color}></Icon>);
            },
            tabBarActiveTintColor : styles.itemMenuActif.color,
            tabBarInactiveTintColor : styles.itemMenuInactif.color,
            }}
        name="vendre" 
        component={Vendre} 
        />
        <NavigationPrincipale.Screen 
                  options={{
                    headerShown: false,
                    tabBarIcon : ({color}) => {
                      return (<Icon type= "material" name="email" color={color}></Icon>);
                    },
                    tabBarActiveTintColor : styles.itemMenuActif.color,
                    tabBarInactiveTintColor : styles.itemMenuInactif.color,
                    }}
        name="message" 
        component={Message} />
        <NavigationPrincipale.Screen 
          options={{
            headerShown: false,
            tabBarIcon : ({color}) => {
              return (<Icon type= "material" name="face" color={color}></Icon>);
            },
            tabBarActiveTintColor : styles.itemMenuActif.color,
            tabBarInactiveTintColor : styles.itemMenuInactif.color,
            }}
        name="profil" 
        component={Profil} 
        />
      </NavigationPrincipale.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        {connecte ? <EcransPrincipaux/> : <EcransConnexions/>}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};