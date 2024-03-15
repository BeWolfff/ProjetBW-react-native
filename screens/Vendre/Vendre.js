import { Text, View } from "react-native";
import AppStyles from "../../AppStyles";
import { Input } from "@rneui/themed";
import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/AppButton/AppButton";


export default () => {
  const appStyles = AppStyles();

  const {control, handleSubmit, formState: {errors}} = useForm();

  const onAjout = (offre) => console.log(offre)

  return (
    <View style={[appStyles.container, appStyles.centered]}>
      <Controller 
      control={control}
      name="nom"
      defaultValue=""
      rules={{required: true}}
      render={({field:{onChange, onBlur,value}})=> (
        <Input label="Nom" 
        style={{margin:0, padding:0}} 
        onBlur={onBlur}
        onChangeText={(text) => onChange(text)}
        value={value}      
        />
      )}
      />
      <Controller
      control={control}
      name="Description"
      defaultValue=""
      rules={{required: true}}
      render={({field:{onChange, onBlur,value}})=> (
        <Input label="Description" 
        style={{margin:0, padding:0}} 
        multiline={true}
        numberOfLines={4}
        onBlur={onBlur}
        onChangeText={(text) => onChange(text)}
        value={value}      
        />
      )}/>

      <AppButton title="Ajouter mon offre" onPress={handleSubmit(onAjout)} >

      </AppButton>
    </View>
  );
};
