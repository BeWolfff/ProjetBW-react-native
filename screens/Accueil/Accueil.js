import { FlatList, Text, View } from "react-native";
import AppStyles from "../../AppStyles";
import { useEffect, useState } from "react";
import AppArticleCard from "../../components/AppArticleCard/AppArticleCard";


export default () => {

    const [listeArticle, setListeArticle] = useState([]);

    useEffect(() => {

        fetch("https://dummyjson.com/products")
            .then(result => result.json())
            .then(result => setListeArticle(result.products));

    }, []);

  const appStyles = AppStyles();

  return (
    <View style={[appStyles.container, appStyles.safeArea]}>
      <FlatList
        data={listeArticle}
        renderItem={({item}) => <AppArticleCard article={item}/>}
        keyExtractor={item => item.id}
      />
      <Text>Accueil</Text>
    </View>
  );
};