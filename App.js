import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Accueil from "./screens/Accueil/Accueil";
import Chercher from "./screens/Chercher/Chercher";
import Vendre from "./screens/Vendre/Vendre";
import Message from "./screens/Message/Message";
import Profil from "./screens/Profil/Profil";
import { Icon } from "@rneui/base";
import AppStyles from "./AppStyles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Connexion from "./screens/Connexion/Connexion";
import * as SecureStore from "expo-secure-store";
import Inscription from "./screens/Inscription/Inscription";
import Toast from "react-native-root-toast";
import { useEffect } from "react";
import { View, Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { LogBox } from "react-native";





export default () => {

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
    console.log(token);
    });
    }, []);
    

  LogBox.ignoreLogs(["new NativeEventEmitter"]);
Notifications.setNotificationHandler({
handleNotification: async () => ({
shouldShowAlert: true,
shouldPlaySound: false,
shouldSetBadge: false,
}),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Platform.OS === "android") {
  Notifications.setNotificationChannelAsync("default", {
  name: "default",
  importance: Notifications.AndroidImportance.MAX,
  vibrationPattern: [0, 250, 250, 250],
  });
  }
  if (Device.isDevice) {
  const { status: existingStatus } =
  await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
  const { status } = await Notifications.requestPermissionsAsync();
  finalStatus = status;
  }
  if (finalStatus !== "granted") {
  alert("Failed to get push token for push notification!");
  return;
  }
  token = await Notifications.getExpoPushTokenAsync({
  projectId: Constants.expoConfig.extra.eas.projectId,
  });
  } else {
  alert("Must use physical device for Push Notifications");
  }
  return token.data;
  }
  
  

  const [connecte, setConnecte] = useState(SecureStore.getItem("jwt") != null);

  const onConnexion = (data) => {

    console.log(process.env.EXPO_PUBLIC_IP_SERVEUR);

    fetch("http://" + process.env.EXPO_PUBLIC_IP_SERVEUR + "/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((result) => result.json())
      .then((result) => {
        console.log(result.jwt);

        SecureStore.setItem("jwt", result.jwt);
        setConnecte(true);
      });
  };

  const onDeconnexion = () => {
    SecureStore.deleteItemAsync("jwt");
    setConnecte(false);
  };

  const NavigationPrincipale = createBottomTabNavigator();
  const NavigationConnexion = createNativeStackNavigator();

  const EcransConnexions = () => {
    const navigation = useNavigation();

    const onInscription = (data) => {

      fetch("http://" + process.env.EXPO_PUBLIC_IP_SERVEUR + "/utilisateur", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      })
        .then(async (result) => {
          if (!result.ok) {
            const error = await result.json();
            let err = new Error(error.message);
            err.result = result;
            err.status = result.status;
            throw err;
          }
        })
        .then((result) => {
          Toast.show("Compte créé, vous pouvez desormais vous connecter");
          navigation.navigate("connexion");
        })
        .catch((erreur) => Toast.show(erreur.message));
    };

    const ConnexionProps = () => (
      <Connexion onConnexion={onConnexion}></Connexion>
    );

    const InscriptionProps = () => (
      <Inscription onInscription={onInscription} />
    );

    return (
      <NavigationConnexion.Navigator>
        <NavigationConnexion.Screen
          component={ConnexionProps}
          name="connexion"
        />
        <NavigationConnexion.Screen
          component={InscriptionProps}
          name="inscription"
        />
      </NavigationConnexion.Navigator>
    );
  };

  const EcransPrincipaux = () => {
    const styles = AppStyles();

    const ProfilProps = () => <Profil onDeconnexion={onDeconnexion} />;

    return (
      <NavigationPrincipale.Navigator>
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <Icon type="material" name="home" color={color}></Icon>;
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="accueil"
          component={Accueil}
        />
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return (
                <Icon
                  type="font-awesome-5"
                  size={19}
                  name="search"
                  color={color}
                ></Icon>
              );
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="chercher"
          component={Chercher}
        />
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <Icon type="material" name="euro" color={color}></Icon>;
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="vendre"
          component={Vendre}
        />
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <Icon type="material" name="email" color={color}></Icon>;
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="message"
          component={Message}
        />
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <Icon type="material" name="face" color={color}></Icon>;
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="profil"
          component={ProfilProps}
        />
      </NavigationPrincipale.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        {connecte ? <EcransPrincipaux /> : <EcransConnexions />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};