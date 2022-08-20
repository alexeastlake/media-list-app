import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MovieListScreen from "./MovieListScreen"
import TVListScreen from "./TVListScreen"
import GameListScreen from "./GameListScreen"
import RandomChooserScreen from "./RandomChooserScreen"
import ProfileScreen from "./ProfileScreen"

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator initialRouteName = {"Profile"}>
            <Tab.Screen name="Movies" component={MovieListScreen} />
            <Tab.Screen name="TV" component={TVListScreen} />
            <Tab.Screen name="Games" component={GameListScreen} />
            <Tab.Screen name="Random" component={RandomChooserScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}