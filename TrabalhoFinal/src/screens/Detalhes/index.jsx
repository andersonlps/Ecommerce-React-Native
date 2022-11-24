import * as React from 'react';
import { View, Text, StyleSheet, Image   } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { styles } from "./styles"


export const Detalhes = ({item}) => {
  return (
<View style={styles.container}>
    <Card>
    <Card.Content>
    <Card.Cover style={styles.img} source={{ uri: 'https://picsum.photos/700' }} />
    <Title style={styles.nome}>Nome do Produto</Title>
    <Paragraph style={styles.descricao}>Descrição Lorem uifhia cdwf wdfdfv efqwdcf qwfer erfed ewrdfe SDWFW</Paragraph>
    <Paragraph style={styles.qtd}>Qtd estoque: 25</Paragraph>
    <Title style={styles.valor}>R$58.0</Title>
    </Card.Content>
    <Card.Actions>
      <Button>Editar</Button>
      <Button>Excluir</Button>
    </Card.Actions>
  </Card>
</View>
  );
};
