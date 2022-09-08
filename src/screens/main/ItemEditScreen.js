import React, { useContext, useState } from "react";
import {useRoute, useNavigation, useFocusEffect} from "@react-navigation/native";
import  {getItem, saveChange} from "../../utility/controller";
import {Text, View, TextInput, KeyboardAvoidingView, ScrollView, Button} from "react-native";
import styles from '../../../library/components/styles';
import { UserContext } from "../../utility/UserContext";

export default function ItemEditScreen({navigation, route}) {
  let user = useContext(UserContext);

  const [item, setItem] = useState();

  useFocusEffect(
    React.useCallback(() => {
      getItem(user, route.params.item.id).then((result) => {
        setItem(result);
        onChangeTitle(result.title);
        onChangePlatform(result.platform);
        onChangeGenres(result.genres.join(", "));
        onChangeNotes(result.notes);
      });
    }, [])
  );

  const [title, onChangeTitle] = useState("");
  const [platform, onChangePlatform] = useState("");
  const [genres, onChangeGenres] = useState("");
  const [notes, onChangeNotes] = useState("");

  if (item) {
    return (
      <KeyboardAvoidingView style = {styles.screenContentWrapper} keyboardVerticalOffset = {-300} behavior = "padding">
          <ScrollView>
            <Text style = {styles.textInputTitle}>Title:</Text>
            <TextInput style = {styles.textInput} onChangeText = {onChangeTitle} defaultValue = {title} multiline = {true}/>
            <Text style = {styles.textInputTitle}>Platform/Service:</Text>
            <TextInput style = {styles.textInput} onChangeText = {onChangePlatform} defaultValue = {platform} multiline = {true}/>
            <Text style = {styles.textInputTitle}>Genres:</Text>
            <TextInput style = {styles.textInput} onChangeText = {onChangeGenres} defaultValue = {genres} multiline = {true}/>
            <Text style = {styles.textInputTitle}>Notes:</Text>
            <TextInput style = {styles.textInput} onChangeText = {onChangeNotes} defaultValue = {notes} multiline = {true}/>
            <Button title = "Save" onPress = {() => saveEdit(user, item.id, item.type, title, platform, genres, notes, navigation)}/>
          </ScrollView>
      </KeyboardAvoidingView>
    );
  } else {
    return(
      <Text style = {styles.loadingText}>Loading...</Text>
    );
  }
}

function saveEdit(uid, id, type, title, platform, genres, notes, navigation) {
  saveChange(uid, id, type, title, platform, genres, notes);
  navigation.goBack();
}