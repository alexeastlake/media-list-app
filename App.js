import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { initializeAuth, onAuthStateChanged } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import {useState} from "react";
import BottomTabs from "./library/components/BottomTabs";
import { firebaseConfig } from "./src/firebase/firebase-config";
import LoginScreen from "./src/screens/login/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RegistrationScreen from "./src/screens/login/RegistrationScreen";

const Stack = createNativeStackNavigator();
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)});

export default function App() {
  const [user, setUser] = useState(null);
  
  auth.onAuthStateChanged(() => {
    setUser(auth.currentUser.uid);
  });
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name = "App" component = {BottomTabs} options = {{headerShown: false}}/>
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
