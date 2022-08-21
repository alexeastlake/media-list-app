import {Text, View} from "react-native";
import ItemList from "../../../library/components/ItemList";
import  {getTypes} from "../../../controller";

export default function TVListScreen() {
  return (
    <View>
      <ItemList items = {getTypes("tv")}></ItemList>
    </View>
  );
}