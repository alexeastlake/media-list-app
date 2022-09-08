import {View, FlatList, Text} from "react-native";
import React, {useContext, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import  {getTypes} from "../../utility/controller";
import ListItem from "../../../library/components/ListItem";
import { UserContext } from "../../utility/UserContext";
import styles from "../../../library/components/styles";

export default function ListScreen({route}) {
  let user = useContext(UserContext);

  const [items, setItems] = useState();

  useFocusEffect(
    React.useCallback(() => {
      getTypes(user, route.params.type).then((result) => {setItems(result)});
    }, [])
  );
  
  if (items) {
    return (
      <View>
        <FlatList data = {items} renderItem = {renderItem}/>
      </View>
    );
  } else {
    return <Text style = {styles.loadingText}>Loading...</Text>
  }

  
}

function renderItem({item}) {
  return (
    <View>
      <ListItem item = {item}/>
    </View>
  );
}