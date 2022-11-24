import { View, StyleSheet, Button } from "react-native";
import { useContext } from 'react';
import AuthContext from "../../contexts/AuthContext";

export const Home = () => {
  const { logoutContext } = useContext(AuthContext);

  return (
    <View style={styles.container}>        
      <Button title="Produtos" onPress={() => logoutContext()} />      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
});
