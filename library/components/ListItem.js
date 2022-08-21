import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ListItem({item}) {
  let navigation = useNavigation();
  
  return (
    <View style = {style.item}>
      <TouchableOpacity onPress = {() => navigation.navigate("Details", {item})}>
        <Text style = {style.title}>{item.title}</Text>
        <Text style = {style.text}>{item.platform}</Text>
        <Text style = {style.text}>{item.genres.join(", ")}</Text>
      </TouchableOpacity>
    </View>
  );
}

let style = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },

  title: {
    fontSize: 22.5,
    fontWeight: "bold",
  },

  text: {
    fontSize: 17.5,
  },
});