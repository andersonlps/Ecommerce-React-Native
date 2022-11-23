import { View, StyleSheet, Button } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>        
      <Button title="Produtos" onPress={() => navigation.navigate("Login")} />      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
});
