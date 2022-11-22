import { useState } from 'react';
import { Text, FlatList, TouchableOpacity, View } from 'react-native'
import { styles } from './styles';
import { CardProdutos } from '../../components/CardProdutos'

const produtos = [
    {
        id: 1,
        nome: "Roupa DinoBaby",
        valor: 107.95,
        descricao: "para vestir",
        imagem: "https://img.ltwebstatic.com/images3_pi/2021/07/20/1626779270eccc4e0292d1a3d8a684cbbdfdc54e54_thumbnail_600x.webp"
    },
    {
        id: 2,
        nome: "Leão Baby",
        valor: 109.90,
        descricao: "para vestir",
        imagem: "https://img.ltwebstatic.com/images3_pi/2021/11/01/1635736722a85627e8fa7751bf9a38db01bf7b5ca4_thumbnail_405x552.webp"
    },
    {
        id: 3,
        nome: "Pandinha",
        valor: 98.90,
        descricao: "para vestir de novo",
        imagem: "https://img.ltwebstatic.com/images3_pi/2021/09/26/1632640232b10056bb71b53d6085896c411927657e_thumbnail_405x552.webp"
    },
    {
        id: 4,
        nome: "Bebe Frango",
        valor: 105.90,
        descricao: "para vestir",
        imagem: "https://img.ltwebstatic.com/images3_pi/2020/10/15/16027577664143347262bb41059cea1e392174c89a_thumbnail_405x552.webp"
    },
    {
        id: 5,
        nome: "My little Baby pony",
        valor: 98.99,
        descricao: "para vestir de novo",
        imagem: "https://img.ltwebstatic.com/images3_pi/2021/07/06/162553958991cc8f46e73e73d80b595c47daafe6b6_thumbnail_405x552.webp"
    },
    {
        id: 6,
        nome: "Roupa Urso",
        valor: 60.99,
        descricao: "para vestir de novo",
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/08/29/166176524223079b70a0f439541344553cc3d298a4_thumbnail_405x552.webp"
    },
]



export const Produtos = () =>{
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