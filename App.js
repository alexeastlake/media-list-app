import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import { useState } from "react";
import BottomTabs from "./library/components/BottomTabs";
import { firebaseConfig } from "./src/firebase/firebase-config";
import LoginScreen from "./src/screens/login/LoginScreen";
import RegistrationScreen from "./src/screens/login/RegistrationScreen";
import { UserContext } from "./src/utility/UserContext";

const Stack = createNativeStackNavigator();

// Initializes Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)});

// Main app method for entry into the app.
export default function App() {
  const [user, setUser] = useState(false);
  
  auth.onAuthStateChanged(() => {
    try {
      if (auth.currentUser) {
        setUser(auth.currentUser.uid);
      } else {
        setUser(false);
      }
    } catch {}
  });
  
  return (
    <UserContext.Provider value = {user}>
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
    </UserContext.Provider>
  );
}