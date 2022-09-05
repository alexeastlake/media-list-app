import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import  {addItem} from "../../utility/controller";
import {Text, View, TextInput, KeyboardAvoidingView, ScrollView, Button} from "react-native";
import styles from '../../../library/components/styles';

export default function ItemAddScreen({navigation, route}) {
  let type = route.params.type;
  
  const [title, onChangeTitle] = React.useState("");
  const [platform, onChangePlatform] = React.useState("");
  const [genres, onChangeGenres] = React.useState("");
  const [notes, onChangeNotes] = React.useState("");

  return (
    <KeyboardAvoidingView style = {styles.screenContentWrapper} keyboardVerticalOffset = {-300} behavior = "padding">
        <ScrollView>
          <Text style = {styles.textInputTitle}>Title:</Text>
          <TextInput style = {styles.textInput} onChangeText = {onChangeTitle} multiline = {true}/>
          <Text style = {styles.textInputTitle}>Platform/Service:</Text>
          <TextInput style = {styles.textInput} onChangeText = {onChangePlatform} multiline = {true}/>
          <Text style = {styles.textInputTitle}>Genres {"(Separated by ,)"}:</Text>
          <TextInput style = {styles.textInput} onChangeText = {onChangeGenres} multiline = {true}/>
          <Text style = {styles.textInputTitle}>Notes:</Text>
          <TextInput style = {styles.textInput} onChangeText = {onChangeNotes} multiline = {true}/>
          <Button title = "Save" onPress = {() => saveItem(type, title, platform, genres, notes, navigation)}/>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

function saveItem(type, title, platform, genres, notes, navigation) {
  addItem(type, title, platform, genres, notes);
  navigation.goBack();
}