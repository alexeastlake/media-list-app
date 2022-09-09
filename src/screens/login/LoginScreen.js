import { useState } from "react";
import { Button, KeyboardAvoidingView, ScrollView, Text, TextInput } from "react-native";
import styles from '../../../library/components/styles';
import { loginUser } from "../../utility/controller";

// Login Screen for first entry into the app.
export default function LoginScreen({navigation}) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <KeyboardAvoidingView style = {styles.screenContentWrapper} keyboardVerticalOffset = {-300} behavior = "padding">
        <ScrollView>
          <Text style = {styles.textInputTitle}>Email:</Text>
          <TextInput style = {styles.textInput} onChangeText = {onChangeEmail}/>
          <Text style = {styles.textInputTitle}>Password:</Text>
          <TextInput style = {styles.textInput} onChangeText = {onChangePassword} secureTextEntry = {true}/>
          <Button title = "Login" onPress = {() => loginUser(email, password)}/>
          <Text style = {styles.registerLink} onPress = {() => navigation.navigate("Register")}>Register</Text>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}