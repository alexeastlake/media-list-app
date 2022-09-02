import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useState} from "react";
import BottomTabs from "./library/components/BottomTabs";
import LoginScreen from "./src/screens/login/LoginScreen";
import RegistrationScreen from "./src/screens/login/RegistrationScreen";
import {firebaseConfig} from "./src/firebase/firebase-config";
import {initializeApp} from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getAuth, initializeAuth} from "firebase/auth";
import {getReactNativePersistence} from "firebase/auth/react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(false);

  const app = initializeApp(firebaseConfig);

  const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)})
  
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
