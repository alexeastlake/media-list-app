import {useDeferredValue, useState} from "react";
import {Text, View, TextInput, KeyboardAvoidingView, ScrollView, Button, Alert} from "react-native";
import styles from '../../../library/components/styles';

import { registerUser } from "../../../controller";
import { login } from "./LoginScreen";

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
          <Button title = "Register" onPress = {() => register(email, password, confirmPassword, navigation)}/>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

function register(email, password, confirmPassword, navigation) {
  if (password != confirmPassword) {
    Alert.alert("Invalid Password", "Passwords did not match");
    return;
  }

  registerUser(email, password, confirmPassword);
}