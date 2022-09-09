import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../../src/screens/main/ProfileScreen";
import RandomChooserScreen from "../../src/screens/main/RandomChooserScreen";
import ListNavigator from "./ListNavigator";

const Tab = createBottomTabNavigator();

// Bottom tab navigator component for tabs throughout the app.
export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName = {"Profile"} screenOptions = {({route}) => ({
      // Setting all tab icons.
      tabBarIcon: ({focused, color, size}) => {
        switch (route.name) {
          case "Movies":
            return <MaterialCommunityIcons name = "movie-outline" size = {size} color= {color}/>;
          case "TV":
            return <MaterialCommunityIcons name = "television" size = {size} color= {color}/>;
          case "Games":
            return <MaterialCommunityIcons name = "gamepad-variant-outline" size = {size} color= {color}/>;
          case "Random":
            return <MaterialCommunityIcons name = "dice-5-outline" size = {size} color= {color}/>;
          case "Profile":
            return <MaterialCommunityIcons name = "account-outline" size = {size} color= {color}/>;
        }
      }
    })}>
      <Tab.Screen name = "Movies" component = {ListNavigator} initialParams = {{type: "movie"}} options = {{headerShown: false}}/>
      <Tab.Screen name = "TV" component = {ListNavigator} initialParams = {{type: "tv"}} options = {{headerShown: false}}/>
      <Tab.Screen name = "Games" component = {ListNavigator} initialParams = {{type: "game"}} options = {{headerShown: false}}/>
      <Tab.Screen name = "Random" component = {RandomChooserScreen}/>
      <Tab.Screen name = "Profile" component = {ProfileScreen}/>
    </Tab.Navigator>
  );
}