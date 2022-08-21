import {Text, View, FlatList, StyleSheet} from "react-native";

export default function ItemList(items) {
  return (
    <View> 
      <FlatList data = {items.items} renderItem = {renderItem}/>
    </View>
  );
}

function renderItem({item}) {
  return (
    <View style = {style.item}>
      <Text style = {style.title}>{item.title}</Text>
      <Text style = {style.text}>{item.platform}</Text>
      <Text style = {style.text}>{item.genres.join(", ")}</Text>
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