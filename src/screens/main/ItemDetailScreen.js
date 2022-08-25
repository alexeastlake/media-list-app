import {ScrollView, Text, View} from "react-native";
import styles from '../../../library/components/styles';

export default function ItemViewScreen({route}) {
  let item = route.params.item;
  
  return (
    <View style = {styles.itemDetail}>
      <ScrollView>
        <Text style = {styles.itemDetailTitle}>{item.title}</Text>
        <Text style = {styles.itemDetailText}>{item.platform}</Text>
        <Text style = {styles.itemDetailText}>{item.genres.join(", ")}</Text>
        <Text style = {[styles.itemDetailText, styles.itemDetailNotes]}>{item.notes}</Text>
      </ScrollView>
    </View>
  );
}