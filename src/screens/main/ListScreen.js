import {View, FlatList} from "react-native";
import React, {useContext, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import  {getTypes} from "../../utility/controller";
import ListItem from "../../../library/components/ListItem";
import { UserContext } from "../../utility/UserContext";

export default function ListScreen({route}) {
  let user = useContext(UserContext);

  const [items, setItems] = useState();

  useFocusEffect(
    React.useCallback(() => {
      getTypes(user, route.params.type).then((result) => {console.log(result); setItems(result)});
    }, [])
  );
  
  return (
    <View>
      <FlatList data = {items} renderItem = {renderItem}/>
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