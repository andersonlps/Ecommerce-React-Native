import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Contatos } from '../screens/Contatos';
import {Home} from '../screens/Home'
import { Produtos } from '../screens/Produtos';

const Tab = createBottomTabNavigator();

export const RotasPrivadas = () =>{
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: true}}/>
      <Tab.Screen name="Produtos" component={Produtos} options={{ headerShown: true}}/>
      <Tab.Screen name="Contatos" component={Contatos} options={{ headerShown: true}}/>
    </Tab.Navigator>

}