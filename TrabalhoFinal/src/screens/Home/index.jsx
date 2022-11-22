import { View, Text, StyleSheet, Button } from "react-native";
import { Topo } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Topo />
      <Button title="Produtos" onPress={() => navigation.navigate("Login")} />      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
