import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import MovieListScreen from "../../screens/MovieListScreen"
import TVListScreen from "../../screens/TVListScreen"
import GameListScreen from "./GameListScreen"
import RandomChooserScreen from "../../screens/RandomChooserScreen"
import ProfileScreen from "../../screens/ProfileScreen"

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName = {"Profile"} screenOptions = {({route}) => ({
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
      <Tab.Screen name="Movies" component={MovieListScreen} />
      <Tab.Screen name="TV" component={TVListScreen} />
      <Tab.Screen name="Games" component={GameListScreen} />
      <Tab.Screen name="Random" component={RandomChooserScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}