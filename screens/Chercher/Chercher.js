import { Text, View, TextInput, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import AppStyles from "../../AppStyles";
import * as SecureStore from "expo-secure-store";
import React from "react";


export default () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const appStyles = AppStyles();

  const handleSearch = async (query) => {
    setSearchQuery(query);
    const token = await SecureStore.getItemAsync("jwt");
    if (!token) {
      console.error("JWT not found");
      return;
    }
    setLoading(true);
    fetch(`http://${process.env.EXPO_PUBLIC_IP_SERVEUR}/offres?search=${query}`, {
      method: "GET",
      //Je dois m'assurer d'une méthode GET pour la recherche = que l'endpoint /offre supporte les requêtes GET avec un paramètre de recherche
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + token,
      },
    })
    .then(response => {
      //console.log(response.text());  // pour voir la réponse brute
      return response.json();
    }) 
    .then(result => {
      setResults(result);
      console.log(result)
      setLoading(false);
    })
    .catch(error => {
      console.error("Failed to fetch offers", error);
      setLoading(false);
    });
  };


  return (
    <View style={[appStyles.container, appStyles.centered]}>
      <Text>Chercher</Text>
      <TextInput
        style={styles.searchInput}
        onChangeText={handleSearch}
        value={searchQuery}
        placeholder="Tapez ici pour chercher..."
      />
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : (
        <FlatList
          data={results}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Text style={styles.itemText}>{item.titre}</Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
  },
  itemText: {
    fontSize: 18,
    marginVertical: 10,
  }
});

