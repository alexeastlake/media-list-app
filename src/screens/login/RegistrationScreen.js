import {useState} from "react";
import {Text, View, TextInput, KeyboardAvoidingView, ScrollView, Button} from "react-native";
import styles from '../../../library/components/styles';

export default function RegistrationScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmPassword, onChangeConfirmPassword] = useState("");

  return (
    <KeyboardAvoidingView style = {styles.itemDetail} keyboardVerticalOffset = {-300} behavior = "padding">
        <ScrollView>
          <Text style = {styles.itemEditText}>Register</Text>
          <Text style = {styles.itemEditText}>Email:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangeEmail} multiline = {true}/>
          <Text style = {styles.itemEditText}>Password:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangePassword} multiline = {true}/>
          <Text style = {styles.itemEditText}>Confirm Password:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangeConfirmPassword} multiline = {true}/>
          <Button title = "Register" onPress = {() => register()}/>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

function register() {
  console.log(register);
}