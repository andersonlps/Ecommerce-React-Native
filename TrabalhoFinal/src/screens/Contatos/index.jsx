import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  ImageBackground,
  Linking,
  TouchableOpacity,
} from "react-native";
import dev1 from "../Contatos/imagens/anderson.jpg";
import dev2 from "../Contatos/imagens/dani.jpg";
import dev3 from "../Contatos/imagens/gabriel.jpg";
import dev4 from "../Contatos/imagens/poema.jpg";
import dev5 from "../Contatos/imagens/raphaela.jpg";
import dev6 from "../Contatos/imagens/110869576.jpg";

//import { styles } from '../Contatos/styles';

export const Contatos = () => {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../Contatos/imagens/fundoCinza.jpg")}
        style={styles.background}
      >
        <React.Fragment>
          <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={dev1} />
            <TouchableOpacity
              style={styles.button}
              styleDisabled={{ color: "red" }}
              onPress={() => {
                Linking.openURL("https://github.com/andersonlps");
              }}
              title="Anderson Lopes"
            >
              <Text>Anderson Lopes</Text>
            </TouchableOpacity>

            <Image resizeMode="contain" style={styles.image} source={dev2} />
            <TouchableOpacity
              style={styles.button}
              styleDisabled={{ color: "red" }}
              onPress={() => {
                Linking.openURL("https://github.com/daniamaral27");
              }}
              title="Dani Amaral"
            >
              <Text>Dani Amaral</Text>
            </TouchableOpacity>

            <Image resizeMode="contain" style={styles.image} source={dev3} />
            <TouchableOpacity
              style={styles.button}
              styleDisabled={{ color: "red" }}
              onPress={() => {
                Linking.openURL("https://github.com/GabrielFsimoes");
              }}
              title="Gabriel Simões"
            >
              <Text>Gabriel Simões</Text>
            </TouchableOpacity>
            <Image resizeMode="contain" style={styles.image} source={dev4} />
            <TouchableOpacity
              style={styles.button}
              styleDisabled={{ color: "red" }}
              onPress={() => {
                Linking.openURL("https://github.com/poemabochner");
              }}
              title="Poema Bochner"
            >
              <Text>Poema Bochner</Text>
            </TouchableOpacity>

            <Image resizeMode="contain" style={styles.image} source={dev5} />
            <TouchableOpacity
              style={styles.button}
              styleDisabled={{ color: "red" }}
              onPress={() => {
                Linking.openURL("https://github.com/Raphaela-Fagundes");
              }}
              title="Raphaela Fagundes"
            >
              <Text>Raphaela Fagundes</Text>
            </TouchableOpacity>
            <Image resizeMode="contain" style={styles.image} source={dev6} />
            <TouchableOpacity
              style={styles.button}
              styleDisabled={{ color: "red" }}
              onPress={() => {
                Linking.openURL("https://github.com/TiagoSouzacf");
              }}
              title="Tiago Souza"
            >
              <Text>Tiago Souza</Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 125,
    elevation: 50,
    shadowColor: "#52006A",
    marginBottom: 20,
    marginTop: 20,
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: "lightblue",
    borderStyle: "solid",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },

  background: {
    justifyContent: "center",
    resizeMode: "cover",
    alignItems: "center",
  },
});
