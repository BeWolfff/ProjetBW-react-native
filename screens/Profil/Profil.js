import { View, Image, Text, StyleSheet } from "react-native";
import AppStyles from "../../AppStyles";
import { useEffect, useState } from "react";
import { Icon, Input } from "@rneui/base";
import AppButton from "../../components/AppButton/AppButton";
import * as ImagePicker from 'expo-image-picker';

export default ({onDeconnexion}) => {
  const styles = AppStyles();
  const appStyles = AppStyles();
  const [email, setEmail] = useState("a@a.com");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <View style={[appStyles.container, appStyles.centered]}>
      <View style={styles.profilePicContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profilePic} />
        ) : (
          <Text>No Profile Picture</Text>
        )}
      </View>
      <Input  
        placeholder="Email" 
        textContentType="emailAddress"
        value={email}
        onChangeText={setEmail}
      />
      <AppButton 
        title="Select Profile Picture" 
        icon={<Icon name="camera" type="icon" color="#ffffff" />}
        onPress={pickImage} 
        style={styles.buttonStyle}
      />
      <AppButton 
        title="Deconnexion" 
        onPress={onDeconnexion} 
        style={styles.buttonStyle}
      />
    </View>
  );
};


