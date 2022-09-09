import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import styles from './styles.js';

// Header component for buttons in the list screens.
export default function ListHeaderButtons() {
  let navigation = useNavigation();

  return (
    <View style = {styles.headerButtonWrapper}>
      <TouchableOpacity onPress = {() => navigation.navigate("Add")}>
        <MaterialCommunityIcons style = {styles.headerButton} name = "plus" color = "black" />
      </TouchableOpacity>
    </View>
  );
}