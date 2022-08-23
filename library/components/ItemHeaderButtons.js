import {TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import styles from './styles.js';

export default function ListHeaderButtons() {
  let navigation = useNavigation();

  return (
    <View style = {styles.headerButtons}>
      <TouchableOpacity onPress = {() => navigation.navigate("Edit")}>
        <MaterialCommunityIcons style = {styles.headerButton} name = "pencil" color = "black"/>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => console.log("delete")}>
        <MaterialCommunityIcons style = {styles.headerButton} name = "trash-can-outline" color = "black" />
      </TouchableOpacity>
    </View>
  );
}