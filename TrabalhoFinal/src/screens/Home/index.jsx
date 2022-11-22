import {View, Text, StyleSheet, Button} from 'react-native';

export const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
        <Text style={styles.texto}>Home </Text>
        <Button title="Produtos"
        onPress={() => navigation.navigate('Login')}/>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131313',
    },
    texto: {
      color: '#fff',
    },
  });