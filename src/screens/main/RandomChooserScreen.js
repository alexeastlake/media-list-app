import React, { useContext, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import styles from "../../../library/components/styles";
import { getRandomItem } from "../../utility/controller";
import { UserContext } from "../../utility/UserContext";

// Screen for letting a user press a button to randomly select an item and showing details of that item.
export default function RandomChooserScreen() {
  let user = useContext(UserContext);

  const [item, setItem] = useState();

  if (item) {
    return (
      <View style = {styles.screenContentWrapper}>
        <ScrollView>
          <Text style = {styles.screenContentTitle}>{item.title}</Text>
          <Text style = {styles.screenContentText}>{item.platform}</Text>
          <Text style = {styles.screenContentText}>{item.genres.join(", ")}</Text>
          <Text style = {[styles.screenContentText, styles.itemDetailNotes]}>{item.notes}</Text>
          <Button style = {styles.randomButton} title = "Random Item" onPress = {() => getRandomItem(user).then((response) => {setItem(response);})}/>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style = {styles.screenContentWrapper}>
        <Text style = {styles.screenContentTitle}>Feeling lucky?</Text>
        <Button style = {styles.randomButton} title = "Random Item" onPress = {() => getRandomItem(user).then((response) => {setItem(response);})}/>
      </View>
    );
  }
}