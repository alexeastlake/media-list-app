import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../../src/screens/main/ListScreen';
import ItemDetailScreen from '../../src/screens/main/ItemDetailScreen';

const Stack = createNativeStackNavigator();

export default function ListNavigator({route}) {
  return (
    <Stack.Navigator initialRouteName = "List" screenOptions = {{headerShown: false}}>
      <Stack.Screen name = "List" component = {ListScreen} initialParams = {route.params}/>
      <Stack.Screen name = "Details" component = {ItemDetailScreen}/>
    </Stack.Navigator>
  );
}