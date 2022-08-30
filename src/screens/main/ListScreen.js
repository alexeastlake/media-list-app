import {View, FlatList} from "react-native";
import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import  {getTypes} from "../../../controller";
import ListItem from "../../../library/components/ListItem";

export default function ListScreen({route}) {
  const [items, setItems] = useState(getTypes(route.params.type));

  useFocusEffect(
    React.useCallback(() => {
      setItems(getTypes(route.params.type));
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