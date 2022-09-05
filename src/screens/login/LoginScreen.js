import { signInWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import {Text, View, TextInput, KeyboardAvoidingView, ScrollView, Button, Alert} from "react-native";
import { loginUser } from "../../../controller";
import styles from '../../../library/components/styles';

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
          <Button title = "Login" onPress = {() => login(email, password, navigation)}/>
          <Text style = {styles.registerLink} onPress = {() => navigation.navigate("Register")}>Register</Text>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

export function login(email, password, navigation) {
  loginUser(email, password);
}