import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import { Home } from "./src/screens/Home";
import { Login } from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Produtos } from "./src/screens/Produtos";
import { Cadastro } from "./src/screens/Cadastro";
import { Ionicons, Fontisto, AntDesign   } from "@expo/vector-icons";


// import { Routes } from './src/routes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              position: "absolute",
              backgroundColor: "#131313",
              borderTopWidth: 0,

              bottom: 5,
              left: 15,
              right: 15,
              elevation: 0,
              borderRadius: 15,
              height: 60,
            },
          }}
        >
          <Tab.Screen
            name="Home "
            component={Login}     
            options={{
              headerShown: false}}       
          />
          <Tab.Screen name="Home" component={Home}
          options={{
            
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="home" size={size} color={color} />;
              }
              return (
                <Ionicons name="home-outline" size={size} color={color} />
              );
            },
          }}
          />
          <Tab.Screen name="Produtos" component={Produtos} 
          options={{
            
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Fontisto name="shopping-store" size={size} color={color} />;
              }
              return (
                <Fontisto name="shopping-store" size={size} color={color} />
              );
            },
          }} />
          <Tab.Screen name="Cadastro" component={Cadastro}
           options={{
            
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <AntDesign name="contacts" size={size} color={color} />;
              }
              return (
                <AntDesign name="contacts" size={size} color={color} />
              );
            },
          }} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar translucent backgroundColor="auto" />
    </View>
    // <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
