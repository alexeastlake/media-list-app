import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../../src/screens/main/ListScreen';
import ItemDetailScreen from '../../src/screens/main/ItemDetailScreen';
import ListHeaderButtons from './ListHeaderButtons';

const Stack = createNativeStackNavigator();

export default function ListNavigator({route}) {
  return (
    <Stack.Navigator initialRouteName = "List">
      <Stack.Screen name = "List" component = {ListScreen} initialParams = {route.params} options = {{
          headerTitle: "",
          headerRight: ListHeaderButtons,
      }}/>
      <Stack.Screen name = "Details" component = {ItemDetailScreen}/>
    </Stack.Navigator>
  );
}