import { FlatList, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CardProdutos } from "../../components/CardProdutos";
import { getProdutos } from "../../services/produto";
import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(produtos);

  const fetchData = async () => {
    const listProdutos = await getProdutos();
    setProdutos(listProdutos);
  };

  useEffect(() => {
    fetchData();
    if (searchText === "") {
      setList(produtos);
    } else {
      setList(
        produtos.filter((item) => {
          return item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        })
      );
    }
  }, [searchText]);

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
          onPress={() => navigation.navigate("Cadastro")}
        >
          <AntDesign name="plussquareo" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <CardProdutos item={item} />}
      />
    </View>
  );
};
