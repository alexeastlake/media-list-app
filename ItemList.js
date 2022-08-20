import { Text, View, FlatList } from "react-native";

export default function ItemList(items) {
    return (
        <View> 
            <FlatList data = {items.items} renderItem = {renderItem}/>
        </View>
  );
}

function renderItem({item}) {
    return (
        <View>
            <Text>{item.title}</Text>
        </View>
    );
}