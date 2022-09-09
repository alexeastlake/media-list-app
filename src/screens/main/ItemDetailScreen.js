import { useFocusEffect } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { ScrollView, Text, View } from "react-native";
import styles from '../../../library/components/styles';
import { getItem } from "../../utility/controller";
import { UserContext } from "../../utility/UserContext";

// Screen for viewing the details of an item selected from a list.
export default function ItemDetailScreen({route}) {
  let user = useContext(UserContext);

  const [item, setItem] = useState();
  
  // When the screen is focused update the items fields incase they're updated.
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
      <Text style = {styles.loadingText}>Loading...</Text>
    );
  }
}