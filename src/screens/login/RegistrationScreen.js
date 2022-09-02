import {useDeferredValue, useState} from "react";
import {Text, View, TextInput, KeyboardAvoidingView, ScrollView, Button, Alert} from "react-native";
import styles from '../../../library/components/styles';

import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {getApp} from "firebase/app";

export default function RegistrationScreen({navigation}) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmPassword, onChangeConfirmPassword] = useState("");

  const auth = getAuth(getApp());

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
          <Button title = "Register" onPress = {() => register(email, password, confirmPassword, auth, navigation)}/>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

function register(email, password, confirmPassword, auth, navigation) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      const user = response.user;
      console.log(user);

      //navigation.navigate("App", {user: data});
    })
    .catch(error => {
      console.log(error);
    })
}