import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { Button, Text, View } from "react-native";
import styles from "../../../library/components/styles";
import { UserContext } from "../../utility/UserContext";

// Screen for when a user first logs in and offers option for a user to log out.
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