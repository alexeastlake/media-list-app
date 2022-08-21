import {Text, View, TextInput} from "react-native";
import ItemList from "../../../library/components/ItemList";
import  {getTypes} from "../../../controller";

export default function MovieListScreen() {
  return (
    <View>
      <ItemList items = {getTypes("movie")}></ItemList>
    </View>
  );
}