import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs></BottomTabs>
    </NavigationContainer>
  );
}
