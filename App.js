import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

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

function MovieListScreen() {
  return (
    <View>
      <Text>Movie List Screen</Text>
    </View>
  );
}

function TVListScreen() {
  return (
    <View>
      <Text>TV List Screen</Text>
    </View>
  );
}

function GameListScreen() {
  return (
    <View>
      <Text>Game List Screen</Text>
    </View>
  );
}

function RandomChooserScreen() {
  return (
    <View>
      <Text>Random Chooser Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
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
