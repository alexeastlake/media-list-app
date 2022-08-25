import {TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from './styles.js';

export default function ListHeaderButtons() {
  let navigation = useNavigation();
  let route = useRoute();

  return (
    <View style = {styles.headerButtons}>
      <TouchableOpacity onPress = {() => navigation.navigate("Edit", route.params)}>
        <MaterialCommunityIcons style = {styles.headerButton} name = "pencil" color = "black"/>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => console.log("delete")}>
        <MaterialCommunityIcons style = {styles.headerButton} name = "trash-can-outline" color = "black" />
      </TouchableOpacity>
    </View>
  );
}