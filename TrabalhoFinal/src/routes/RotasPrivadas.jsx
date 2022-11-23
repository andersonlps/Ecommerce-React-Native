import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Home } from "../screens/Home";
import { Produtos } from "../screens/Produtos";
import { Contatos } from "../screens/Contatos";
import { Entypo, Fontisto, Feather, FontAwesome } from "@expo/vector-icons";
import { Topo } from "../components/Header";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login1"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={Home}
        options={{
          headerTitle: () => <Topo />,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const ProdutosStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Produtos1"
        component={Produtos}
        options={{ headerTitle: () => <Topo /> }}
      />
    </Stack.Navigator>
  );
};

const ContatosStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contatos1"
        component={Contatos}
        options={{ headerTitle: () => <Topo /> }}
      />
    </Stack.Navigator>
  );
};

export const RotasPrivadas = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: "#fff",
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Login"
        component={LoginStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={ProdutosStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="shopping-store" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contatos"
        component={ContatosStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="group" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
