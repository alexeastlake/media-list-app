import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MovieListScreen from "./MovieListScreen"
import TVListScreen from "./TVListScreen"
import GameListScreen from "./GameListScreen"
import RandomChooserScreen from "./RandomChooserScreen"
import ProfileScreen from "./ProfileScreen"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Movies" component={MovieListScreen} />
        <Tab.Screen name="TV" component={TVListScreen} />
        <Tab.Screen name="Games" component={GameListScreen} />
        <Tab.Screen name="Random" component={RandomChooserScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
