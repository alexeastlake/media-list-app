import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import  {addItem} from "../../../controller";
import {Text, View, TextInput, KeyboardAvoidingView, ScrollView, Button} from "react-native";
import styles from '../../../library/components/styles';

export default function ItemAddScreen({navigation, route}) {
  let type = route.params.type;
  
  const [title, onChangeTitle] = React.useState("");
  const [platform, onChangePlatform] = React.useState("");
  const [genres, onChangeGenres] = React.useState("");
  const [notes, onChangeNotes] = React.useState("");

  return (
    <KeyboardAvoidingView style = {styles.itemDetail} keyboardVerticalOffset = {-300} behavior = "padding">
        <ScrollView>
          <Text style = {styles.itemEditText}>Title:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangeTitle} multiline = {true}/>
          <Text style = {styles.itemEditText}>Platform/Service:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangePlatform} multiline = {true}/>
          <Text style = {styles.itemEditText}>Genres {"(Separated by ,)"}:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangeGenres} multiline = {true}/>
          <Text style = {styles.itemEditText}>Notes:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangeNotes} multiline = {true}/>
          <Button title = "Save" onPress = {() => saveItem(type, title, platform, genres, notes, navigation)}/>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

function saveItem(type, title, platform, genres, notes, navigation) {
  addItem(type, title, platform, genres, notes);
  navigation.goBack();
}