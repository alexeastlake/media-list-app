import { Text, View, TextInput } from "react-native";
import ItemList from "./ItemList";
import  { getTypes } from "./controller";

export default function MovieListScreen() {
  return (
    <View>
      <TextInput value={"Search"}/>
      <ItemList items = {getTypes("movie")}></ItemList>
    </View>
  );
}