import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { deleteItem } from "../../src/utility/controller";
import { UserContext } from "../../src/utility/UserContext";
import styles from './styles.js';

// Header component with buttons for editing and deleting a list item. 
export default function ItemHeaderButtons() {
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

// Shows an alert for the user to confirm or cancel deleting of an item.
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