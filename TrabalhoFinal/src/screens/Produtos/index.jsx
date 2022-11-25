import { FlatList, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CardProdutos } from "../../components/CardProdutos";
import { getProdutos } from "../../services/produto";
import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../../contexts/AuthContext";

export const Produtos = () => {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(true);
  const { loading } = useContext(AuthContext)

  const fetchData = async () => {
    if (loading) 
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="red" />
      </View>
  )
    const listProdutos = await getProdutos();
    await setProdutos(listProdutos);
    setList(
      produtos.filter((item) => {
        return item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      })
    );
  }

  useEffect(() => {
    fetchData();

    navigation.addListener('focus', () => setLoad(!load))
  }, [searchText, load, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.barraPesquisa}>
        <Searchbar
          style={styles.pesquisa}
          placeholder="Pesquisar..."
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity
          style={styles.btnPlus}
          onPress={() => navigation.navigate("Cadastrar")}
        >
          <AntDesign name="plussquareo" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={(searchText === '' ? produtos : list )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <CardProdutos item={item} />}
      />
    </View>
  );
};
