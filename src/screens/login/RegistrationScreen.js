import { useState } from "react";
import { Alert, Button, KeyboardAvoidingView, ScrollView, Text, TextInput } from "react-native";
import styles from '../../../library/components/styles';
import { registerUser } from "../../utility/controller";

// Registration screen for a new user to enter details.
export default function RegistrationScreen({navigation}) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmPassword, onChangeConfirmPassword] = useState("");

  return (
    <KeyboardAvoidingView style = {styles.screenContentWrapper} keyboardVerticalOffset = {-300} behavior = "padding">
        <ScrollView>
          <Text style = {styles.textInputTitle}>Email:</Text>
          <TextInput style = {styles.textInput} onChangeText = {onChangeEmail}/>
          <Text style = {styles.textInputTitle}>Password:</Text>
          <TextInput style = {styles.textInput} onChangeText = {onChangePassword} secureTextEntry = {true}/>
          <Text style = {styles.textInputTitle}>Confirm Password:</Text>
          <TextInput style = {styles.textInput} onChangeText = {onChangeConfirmPassword} secureTextEntry = {true}/>
          <Button title = "Register" onPress = {() => register(email, password, confirmPassword)}/>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Checks if the two given passwords match then registers the user.
function register(email, password, confirmPassword) {
  if (password != confirmPassword) {
    Alert.alert("Invalid Password", "Passwords did not match");
    return;
  }

  registerUser(email, password);
}