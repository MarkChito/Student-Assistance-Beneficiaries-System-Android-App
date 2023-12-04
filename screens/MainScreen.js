import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import TransactionsScreen from './TransactionsScreen';

const Drawer = createDrawerNavigator();

export const MainDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Dashboard' component={DashboardScreen}/>
      <Drawer.Screen name='Transactions' component={TransactionsScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <MainDrawer />
    </NavigationContainer>
  );
};