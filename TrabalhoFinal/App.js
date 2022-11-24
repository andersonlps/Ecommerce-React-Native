
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RotasPrivadas } from "./src/routes/RotasPrivadas";
import { StatusBar, Image, View } from "react-native";
import { useEffect, useState } from "react";

export default function App() {

const [load, setLoad] = useState(true)
function SplashScreenVideo (){
  setTimeout(() => {
    setLoad(false);
  }, 5000);
    
}

useEffect(()=>{
  SplashScreenVideo()
},[])

if (load){
  return(
    <View  style={{flex:1}} >
    <Image style={{width:"100%", height:"100%"}} source={require('./assets/splash.gif')}/>
    </View>
  )
}
  return (
    <NavigationContainer>
      <StatusBar
      barStyle="dark-content"
      backgroundColor="white" 
      bare     
      />
      {/* <RotasPublicas /> */}
      <RotasPrivadas />
    </NavigationContainer>
  );

}
