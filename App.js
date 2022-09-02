import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useState} from "react";
import BottomTabs from "./library/components/BottomTabs";
import LoginScreen from "./src/screens/login/LoginScreen";
import RegistrationScreen from "./src/screens/login/RegistrationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(false);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name = "App">
            <BottomTabs></BottomTabs>
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name = "Login" component = {LoginScreen}/>
            <Stack.Screen name = "Register" component = {RegistrationScreen}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
