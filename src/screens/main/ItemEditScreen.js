import { useRoute } from "@react-navigation/native";
import {Text, View} from "react-native";

export default function ItemEditScreen({route}) {
  console.log(route);
  // add text inputs here next
  return (
    <View>
      <Text>Item edit screen</Text>
    </View>
  );
}