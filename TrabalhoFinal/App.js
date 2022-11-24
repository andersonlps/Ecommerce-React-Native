import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Image, View } from "react-native";
import { useEffect, useState } from "react";
import Routes from './src/routes';
import { AuthProvider } from "./src/contexts/AuthContext";

const App = () => {

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
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </NavigationContainer>
  );

};

export default App;
