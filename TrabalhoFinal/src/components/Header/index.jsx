import React from "react";
import { View,  StyleSheet, Image, Text} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export const Topo = () => {
  return (
    
      <View style={styles.header}>
        <AntDesign name="search1" size={24} color="black" />
        <View style={styles.ImgText}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 100, height: 50 }}/>
          <Text style={styles.texto}>Roupas para seu bebê</Text>
        </View>
        <MaterialIcons name="logout" size={24} color="black" />        
      </View>
    
  );
};

const styles = StyleSheet.create({
  header: {   
    flexDirection: "row",
    width:"96%",    
    height:100,    
    alignItems: "center",
    justifyContent: "space-between",   
    padding:5,  
        
  },
  
  ImgText: {
    
    alignItems: "center",
    justifyContent: "center",    
  },
  texto: {
    color: "#A45E4D",
    justifyContent: "center",
    alignItems: "center",
  },
});
