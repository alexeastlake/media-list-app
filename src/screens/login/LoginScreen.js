import {useState} from "react";
import {Text, View, TextInput, KeyboardAvoidingView, ScrollView, Button} from "react-native";
import styles from '../../../library/components/styles';

export default function LoginScreen({navigation}) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <KeyboardAvoidingView style = {styles.itemDetail} keyboardVerticalOffset = {-300} behavior = "padding">
        <ScrollView>
          <Text style = {styles.itemEditText}>Login</Text>
          <Text style = {styles.itemEditText}>Email:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangeEmail} multiline = {true}/>
          <Text style = {styles.itemEditText}>Password:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangePassword} multiline = {true}/>
          <Button title = "Login" onPress = {() => login()}/>
          <Text style = {styles.itemEditText} onPress = {() => navigation.navigate("Register")}>Register</Text>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

function login() {
  console.log(login);
}