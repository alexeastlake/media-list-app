import {Button, Text, View} from "react-native";
import {useContext} from "react";
import { UserContext } from "../../utility/UserContext";
import {getAuth, signOut} from "firebase/auth"
import styles from "../../../library/components/styles";

export default function ProfileScreen() {
  let user = useContext(UserContext);
  let auth = getAuth();

  return (
    <View style = {styles.screenContentWrapper}>
      <Text style = {styles.screenContentTitle}>Hello,</Text>
      <Text style = {styles.screenContentText}>{auth.currentUser.email}</Text>
      <Button title = "Logout" onPress = {() => signOut(auth)}/>
    </View>
  );
}