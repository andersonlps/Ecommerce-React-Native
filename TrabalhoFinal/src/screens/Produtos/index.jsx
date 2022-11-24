import { Text, FlatList, TouchableOpacity, View } from 'react-native'
import { styles } from './styles';
import { CardProdutos } from '../../components/CardProdutos'
import { getProdutos } from '../../services/produto';
import { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';

export const Produtos = () =>{
  const [produtos, setProdutos] = useState([]);

  const fetchData = async () => {
    const listProdutos = await getProdutos();
    setProdutos(listProdutos);
  };

  useEffect(() => {
    fetchData();
  }, []);

    return(  
        <View style={styles.container}>  
            <Text style={styles.titulo}>Produtos</Text>

        <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => <CardProdutos item={item} />}
      />
        </View>
    );
    
}