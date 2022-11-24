import * as React from 'react';
import { View, Text, StyleSheet, Image   } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { deleteProduto } from '../../services/produto';
import { styles } from "./styles"


export const Detalhes = ({route}) => {
  const item = route.params.item;

  return (
<View style={styles.container}>
    <Card>
    <Card.Content>
    <Card.Cover style={styles.img} source={{ uri: item.imagem }} />
    <Title style={styles.nome}>{item.name}</Title>
    <Paragraph style={styles.descricao}>{item.descricao}</Paragraph>
    <Paragraph style={styles.qtd}>Estoque: {item.qtdEstoque}</Paragraph>
    <Title style={styles.valor}>R$ {item.valor}</Title>
    </Card.Content>
    <Card.Actions>
      <Button >Editar</Button>
      <Button onPress={() => deleteProduto()}>Excluir</Button>
    </Card.Actions>
  </Card>
</View>
  );
};
