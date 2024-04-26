import { FlatList, Text, View, Button } from "react-native";
import AppStyles from "../../AppStyles";
import { useEffect, useState } from "react";
import AppArticleCard from "../../components/AppArticleCard/AppArticleCard";
import * as SecureStore from 'expo-secure-store';
import { pay } from 'react-native-paypal-lib';

export default () => {
    const [listeArticle, setListeArticle] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            const token = await SecureStore.getItemAsync("jwt");
            fetch("http://" + process.env.EXPO_PUBLIC_IP_SERVEUR + "/offres", {
                headers: { Authorization: "Bearer " + token },
            })
            .then(result => result.json())
            .then(result => setListeArticle(result));
        }
        fetchArticles();
    }, []);

    const appStyles = AppStyles();

    const handlePayment = async () => {
        try {
            const payment = await pay({
                clientId: 'My-Paypal-Client-Id',
                environment: 'SANDBOX', // or 'PRODUCTION'
                intent: 'sale', // or 'authorize' or 'order'
                price: 10.00, // amount to be paid
                currency: 'USD', // currency of transaction
                description: 'Description of my product or service',
                acceptCreditCards: true
            });
            console.log(payment);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={[appStyles.container, appStyles.safeArea]}>
            <FlatList
                horizontal={true}
                data={listeArticle}
                renderItem={({item}) => <AppArticleCard article={item}/>}
                keyExtractor={item => item._id}
            />
            <Button title="Paiement en ligne" onPress={handlePayment} />
        </View>
    );
};
