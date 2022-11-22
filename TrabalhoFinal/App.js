import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Produtos } from './src/screens/Produtos';
// import { Routes } from './src/routes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Produtos" component={Produtos} />
      </Tab.Navigator>
    </NavigationContainer>
      <StatusBar  translucent backgroundColor="auto" />
    </View>
    // <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
