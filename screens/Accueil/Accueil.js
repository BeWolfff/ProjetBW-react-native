import { Text, View } from "react-native";
import AppStyles from "../../AppStyles";
import { useEffect, useState } from "react";


export default () => {

    const [listeArticle, setListeArticle] = useState([]);

    useEffect(() => {

        fetch("https://dummyjson.com/products")
            .then(result => result.json())
            .then(result => setListeArticle(result.products));

    }, []);

  const appStyles = AppStyles();

  return (
    <View style={[appStyles.container, appStyles.centered]}>
      <Text>Accueil</Text>
    </View>
  );
};