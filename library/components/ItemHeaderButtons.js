import {Alert, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import  {deleteItem} from "../../src/utility/controller";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from './styles.js';
import { useContext } from "react";
import { UserContext } from "../../src/utility/UserContext";

export default function ListHeaderButtons() {
  let navigation = useNavigation();
  let route = useRoute();
  let user = useContext(UserContext);


  return (
    <View style = {styles.headerButtonWrapper}>
      <TouchableOpacity onPress = {() => navigation.navigate("Edit", route.params)}>
        <MaterialCommunityIcons style = {styles.headerButton} name = "pencil" color = "black"/>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => deleteAlert(user, navigation, route.params)}>
        <MaterialCommunityIcons style = {styles.headerButton} name = "trash-can-outline" color = "black" />
      </TouchableOpacity>
    </View>
  );
}

function deleteAlert(uid, navigation, params) {
  Alert.alert(
    "Delete",
    "Are you sure you want to delete " + params.item.title + "?",
    [
      {
        text: "Cancel",
      },
      {
        text: "Delete",
        onPress: () => {deleteItem(uid, params.item.id); navigation.goBack();}
      }
    ],
  );
}