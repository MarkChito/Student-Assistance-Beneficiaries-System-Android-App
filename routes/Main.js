import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen';
import TransactionsScreen from './screens/TransactionsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Dashboard' component={DashboardScreen}/>
        <Drawer.Screen name='Transactions' component={TransactionsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}