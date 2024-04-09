import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import AppStyles from "../../AppStyles";
import { Input } from "@rneui/themed";
import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/AppButton/AppButton";
import AppInputText from "../../components/AppInputText/AppInputText";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import VendreStyles from "./VendreStyles";


export default () => {
  const appStyles = AppStyles();
  const styles = VendreStyles();

  const {control, handleSubmit, 
    formState: {errors},
    } = useForm();

  const onAjout = (offre) => console.log(offre)
 
  const [photos, setPhotos] = useState([]); 

  const prendrePhoto = async () => {    
    const result = await ImagePicker.launchCameraAsync({     
      mediaTypes: ImagePicker.MediaTypeOptions.Images,      
      allowsEditing: false,      
      aspect: [4, 3],      
      quality: 1,    
    });    
      if (!result.canceled) {      
        const { assets } = result;      
        if (assets && assets.length > 0) {        
          setPhotos([...photos, assets[0].uri]);      
        }    
      }  
    };

    const selectionnePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({     
      mediaTypes: ImagePicker.MediaTypeOptions.Images,      
      allowsEditing: false,      
      aspect: [4, 3],      
      quality: 1,    
    });    
      if (!result.canceled) {      
        const { assets } = result;      
        if (assets && assets.length > 0) {        
          setPhotos([...photos, assets[0].uri]);      
        }    
      }  
    };

    const handleDelete = (uriToDelete) => {
      setPhotos((currentPhotos)=> 
      currentPhotos.filter((uri)=> uri !== uriToDelete)
      );
    }

  return (
    <View style={[appStyles.container, appStyles.centered]}>
      <FlatList 
      horizontal={true} 
      data={photos} 
      renderItem={({item }) => (
        <View style={styles.imageContainer}>
          <Image source={{uri: item}} style={styles.image} />
          <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item)}
          >
            <Text style={styles.deleteButtonText}>X</Text>

          </TouchableOpacity>
        </View>
      )}
      ></FlatList>
      <AppInputText 
      control={control}
      name="nom"
      defaultValue=""
      rules={{
        required:"Le champs est requis", 
        minLength: {value: 3, message: "3 caractères minimum"}, 
        maxLength: {value: 20, message: "20 caractères maximum"},
      }}
      label="Nom"
      />
      <AppInputText
        control={control}
        name="description"
        defaultValue=""
        rules={{
          maxLength: {value: 100, message: "100 caractères maximum"},
        }}
        label="Description" 
        multiline={true}
        numberOfLines={4}
        />
    
      <AppButton 
        title="Ajouter une photo" 
        onPress={prendrePhoto} >
      </AppButton>

      <AppButton 
        title = "Selectionne une photo" 
        onPress={selectionnePhoto} >
      </AppButton>


      <AppButton 
        title="Ajouter mon offre" 
        onPress={handleSubmit(onAjout)} >
      </AppButton>



    </View>
  );
};
