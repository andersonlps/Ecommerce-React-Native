import { Text, View, Image, TouchableOpacity, SafeAreaView  } from 'react-native'
import { styles } from './styles';

export const CardProdutos = ({item}) =>{
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity  style={styles.cardContainer}>
                <Image source={{uri: item.imagem }} style={styles.img}/>
                <Text style={styles.nome}>{item.nome} </Text>
                <Text style={styles.valor}>R${item.valor} </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

