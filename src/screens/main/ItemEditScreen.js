import React from "react";
import {useRoute, useNavigation} from "@react-navigation/native";
import  {getItem, saveChange} from "../../../controller";
import {Text, View, TextInput, KeyboardAvoidingView, ScrollView, Button} from "react-native";
import styles from '../../../library/components/styles';

export default function ItemEditScreen({navigation, route}) {
  let item = getItem(route.params.item.id);

  const [title, onChangeTitle] = React.useState(item.title);
  const [platform, onChangePlatform] = React.useState(item.platform);
  const [genres, onChangeGenres] = React.useState(item.genres.join(", "));
  const [notes, onChangeNotes] = React.useState(item.notes);

  return (
    <KeyboardAvoidingView style = {styles.itemDetail} keyboardVerticalOffset = {-300} behavior = "padding">
        <ScrollView>
          <Text style = {styles.itemEditText}>Title:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangeTitle} defaultValue = {title} multiline = {true}/>
          <Text style = {styles.itemEditText}>Platform/Service:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangePlatform} defaultValue = {platform} multiline = {true}/>
          <Text style = {styles.itemEditText}>Genres:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangeGenres} defaultValue = {genres} multiline = {true}/>
          <Text style = {styles.itemEditText}>Notes:</Text>
          <TextInput style = {styles.itemEditInput} onChangeText = {onChangeNotes} defaultValue = {notes} multiline = {true}/>
          <Button title = "Save" onPress = {() => saveEdit(item.id, title, platform, genres, notes, navigation)}/>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

function saveEdit(id, title, platform, genres, notes, navigation) {
  saveChange(id, title, platform, genres, notes);
  navigation.goBack();
}