import { Text, View } from "react-native";
import AppStyles from "../../AppStyles";
import { Input } from "@rneui/themed";
import { Controller, useForm } from "react-hook-form";


export default () => {
  const appStyles = AppStyles();

  const {control, handleSubmit, formState: {errors}} = useForm();

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
        onChangeText={(text) => onChange<(text)}
        value={value}      
        />
      )}
      /><Controller
      control={control}
      name="Designation"
      defaultValue=""
      rules={{required: true}}
      render={({field:{onChange, onBlur,value}})=> (
        <Input label="Designation" 
        style={{margin:0, padding:0}} 
        multiline={true}
        numberOfLines={4}
        onBlur={onBlur}
        onChangeText={(text) => onChange<(text)}
        value={value}      
        />
      )}/>
    </View>
  );
};
