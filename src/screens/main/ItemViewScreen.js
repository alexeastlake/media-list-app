import {Text, View} from "react-native";

export default function ItemViewScreen(item) {
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.platform}</Text>
      <Text>{item.genres.join(", ")}</Text>
      <Text>{item.notes}</Text>
    </View>
  );
}