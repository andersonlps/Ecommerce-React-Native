import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RotasPrivadas } from "./src/routes/RotasPrivadas";
import { StatusBar } from "react-native";
// import { RotasPublicas } from "./src/routes/RotasPublicas";

// import { Routes } from './src/routes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
      barStyle="dark-content"
      backgroundColor="white"      
      />
      {/* <RotasPublicas /> */}
      <RotasPrivadas />
    </NavigationContainer>
  );
}
