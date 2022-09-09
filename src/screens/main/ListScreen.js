import { useFocusEffect } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { FlatList, Text, View } from "react-native";
import ListItem from "../../../library/components/ListItem";
import styles from "../../../library/components/styles";
import { getTypes } from "../../utility/controller";
import { UserContext } from "../../utility/UserContext";

// Screen for showing a list of items of a given type.
export default function ListScreen({route}) {
  let user = useContext(UserContext);

  const [items, setItems] = useState();

  useFocusEffect(
    React.useCallback(() => {
      getTypes(user, route.params.type).then((result) => {setItems(result)});
    }, [])
  );
  
  if (items) {
    if (items.length === 0) {
      return (
        <Text style = {styles.loadingText}>There are no items here</Text>
      );
    } else {
      return (
        <View>
          <FlatList data = {items} renderItem = {renderItem}/>
        </View>
      );
    }
  } else {
    return (<Text style = {styles.loadingText}>Loading...</Text>);
  }
}

// Render item method for the FlatList.
function renderItem({item}) {
  return (
    <View>
      <ListItem item = {item}/>
    </View>
  );
}