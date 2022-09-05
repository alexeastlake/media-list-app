import {ScrollView, Text, View} from "react-native";
import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import  {getItem, getCopiedItem} from "../../../controller";
import styles from '../../../library/components/styles';

export default function ItemDetailScreen({route}) {
  const [item, setItem] = useState(getCopiedItem(route.params.item.id));
  
  useFocusEffect(
    React.useCallback(() => {
      setItem(getCopiedItem(route.params.item.id));
    }, [])
  );

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
}