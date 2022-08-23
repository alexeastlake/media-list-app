import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from './styles.js';

export default function ListItem({item}) {
  let navigation = useNavigation();
  
  return (
    <View style = {styles.listItem}>
      <TouchableOpacity onPress = {() => navigation.navigate("Details", {item})}>
        <Text style = {styles.listItemTitle}>{item.title}</Text>
        <Text style = {styles.listItemText}>{item.platform}</Text>
        <Text style = {styles.listItemText}>{item.genres.join(", ")}</Text>
      </TouchableOpacity>
    </View>
  );
}