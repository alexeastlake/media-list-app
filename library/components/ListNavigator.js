import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemAddScreen from '../../src/screens/main/ItemAddScreen';
import ItemDetailScreen from '../../src/screens/main/ItemDetailScreen';
import ItemEditScreen from '../../src/screens/main/ItemEditScreen';
import ListScreen from '../../src/screens/main/ListScreen';
import ItemHeaderButtons from './ItemHeaderButtons';
import ListHeaderButtons from './ListHeaderButtons';

const Stack = createNativeStackNavigator();

// Stack navigator component for navigating between screens in the list areas of the app.
export default function ListNavigator({route}) {
  return (
    <Stack.Navigator initialRouteName = "List" screenOptions = {{}}>
      <Stack.Screen name = "List" component = {ListScreen} initialParams = {route.params} options = {{
        headerTitle: "",
        headerRight: ListHeaderButtons,
      }}/>
      <Stack.Screen name = "Add" component = {ItemAddScreen} initialParams = {route.params}/>
      <Stack.Screen name = "Details" component = {ItemDetailScreen} options = {{
        headerRight: ItemHeaderButtons,
      }}/>
      <Stack.Screen name = "Edit" component = {ItemEditScreen}/>
    </Stack.Navigator>
  );
}