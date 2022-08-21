import {Text, View} from "react-native";
import ItemList from "./ItemList";
import  {getTypes} from "./controller";

export default function GameListScreen() {
  return (
    <View>
      <ItemList items = {getTypes("game")}></ItemList>
    </View>
  );
}