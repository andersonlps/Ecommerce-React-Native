import { View, Text, StyleSheet, Button, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

export const Topo = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.pesquisa}>
          <AntDesign name="search1" size={32} color="black" />
        </View>
        <View style={styles.ImgText}>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 100, height: 50 }}
          />
          <Text style={styles.texto}>Roupas para seu bebê</Text>
        </View>
        <View style={styles.logout}>
          <MaterialIcons name="logout" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",    
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  pesquisa: {
    width: "10%",
    marginLeft: 10,
    alignItems: "center",
  },
  logout:{
    width: "10%",    
    alignItems: "center",
  },
  ImgText: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    color: "#A45E4D",
    justifyContent: "center",
    alignItems: "center",
  },
});
