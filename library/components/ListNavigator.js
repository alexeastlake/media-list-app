import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../../src/screens/main/ListScreen';
import ItemDetailScreen from '../../src/screens/main/ItemDetailScreen';
import ItemAddScreen from '../../src/screens/main/ItemAddScreen';
import ItemEditScreen from '../../src/screens/main/ItemEditScreen';
import ListHeaderButtons from './ListHeaderButtons';
import ItemHeaderButtons from './ItemHeaderButtons';

const Stack = createNativeStackNavigator();

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