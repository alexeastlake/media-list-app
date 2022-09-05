import {Text, View} from "react-native";
import {useContext} from "react";
import { UserContext } from "../../utility/UserContext";

export default function ProfileScreen() {
  let user = useContext(UserContext);

  return (
    <View>
      <Text>Profile Screen, {user}</Text>
    </View>
  );
}