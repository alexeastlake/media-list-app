import {View, FlatList} from "react-native";
import  {getTypes} from "../../../controller";
import ListItem from "../../../library/components/ListItem";

export default function ListScreen({route}) {
  return (
    <View>
      <FlatList data = {getTypes(route.params.type)} renderItem = {renderItem}/>
    </View>
  );
}

function renderItem({item}) {
  return (
    <View>
      <ListItem item = {item}/>
    </View>
  );
}