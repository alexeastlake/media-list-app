import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import styles from './styles.js';

// List item component for FlatList of list items.
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