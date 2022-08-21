import {Text, View} from "react-native";

export default function ItemViewScreen({route}) {
  let item = route.params.item;
  
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.platform}</Text>
      <Text>{item.genres.join(", ")}</Text>
    </View>
  );
}