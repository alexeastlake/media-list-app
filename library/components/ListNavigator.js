import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../../src/screens/main/ListScreen';
import ItemDetailScreen from '../../src/screens/main/ItemDetailScreen';
import ItemAddScreen from '../../src/screens/main/ItemAddScreen';
import ItemFilterScreen from '../../src/screens/main/ItemFilterScreen';
import ListHeaderButtons from './ListHeaderButtons';

const Stack = createNativeStackNavigator();

export default function ListNavigator({route}) {
  return (
    <Stack.Navigator initialRouteName = "List" screenOptions = {{}}>
      <Stack.Screen name = "List" component = {ListScreen} initialParams = {route.params} options = {{
          headerTitle: "",
          headerRight: ListHeaderButtons,
      }}/>
      <Stack.Screen name = "Add" component = {ItemAddScreen}/>
      <Stack.Screen name = "Filter" component = {ItemFilterScreen}/>
      <Stack.Screen name = "Details" component = {ItemDetailScreen}/>
    </Stack.Navigator>
  );
}