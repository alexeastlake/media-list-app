import {TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import styles from './styles.js';

export default function ListHeaderButtons() {
  return (
    <View style = {styles.listHeaderButtons}>
      <TouchableOpacity onPress = {() => console.log("filter")}>
        <MaterialCommunityIcons style = {styles.listHeaderButton} name = "filter-variant" color = "black"/>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => console.log("add")}>
        <MaterialCommunityIcons style = {styles.listHeaderButton} name = "plus" color = "black" />
      </TouchableOpacity>
    </View>
  );
}