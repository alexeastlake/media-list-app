import {ScrollView, Text, View} from "react-native";
import React, {useContext, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import  {getItem, getCopiedItem} from "../../utility/controller";
import styles from '../../../library/components/styles';
import { UserContext } from "../../utility/UserContext";

export default function ItemDetailScreen({route}) {
  let user = useContext(UserContext);

  const [item, setItem] = useState();
  
  useFocusEffect(
    React.useCallback(() => {
      getItem(user, route.params.item.id).then((result) => {setItem(result)});
    }, [])
  );

  if (item) {
    return (
      <View style = {styles.screenContentWrapper}>
        <ScrollView>
          <Text style = {styles.screenContentTitle}>{item.title}</Text>
          <Text style = {styles.screenContentText}>{item.platform}</Text>
          <Text style = {styles.screenContentText}>{item.genres.join(", ")}</Text>
          <Text style = {[styles.screenContentText, styles.itemDetailNotes]}>{item.notes}</Text>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <Text>Loading...</Text>
    );
  }
}