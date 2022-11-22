import {View, Text, StyleSheet} from 'react-native';

export const Contatos = () => {
    return(
        <View style={styles.container}>
        <Text style={styles.texto}>Contatos </Text>
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