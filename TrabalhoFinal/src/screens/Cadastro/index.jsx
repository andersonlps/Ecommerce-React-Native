import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import {styles} from './styles';
import { StyleSheet } from "react-native";
import { Topo } from "../../components/Header";

export const Cadastro = ({ navigation }) => {
  const [usuarioNome, setUsuarioNome] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");
  const verificaSenha = () => {
    if ((senha = !senha2)) {
      alert("As senhas não batem");
    }
  };

  return (
      <View style={styles.container}>

      <ScrollView>
      <Text style={styles.textoCadastro}>Cadastro</Text>
      <View style={styles.container2}>
        <Text style={styles.texto}>Criar Conta</Text>
        <TextInput
          style={styles.textImput}
          placeholder="    DIGITE SEU NOME"
          onChange={setUsuarioNome}
          value={usuarioNome}
        />
        <TextInput
          style={styles.textImput}
          placeholder="    DIGITE SEU E-MAIL"
          onChange={setUserEmail}
          value={userEmail}
        />
        <TextInput
          style={styles.textImput}
          placeholder="    DIGITE SUA SENHA"
          onChange={setSenha}
          value={senha}
        />
        <TextInput
          style={styles.textImput}
          placeholder="    DIGITE SUA SENHA NOVAMENTE"
          onChange={setSenha2}
          value={senha2}
        />
        <TouchableOpacity style={styles.buttonEntrar}>
          <Text style={styles.textoEntrar}>Continuar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCadastrar}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textoCadastrar}>Já tem uma conta? Entre!</Text>
        </TouchableOpacity>
        <Text style={styles.textoCondicoes}>
          Ao criar uma conta, você concorda com as Condições de Uso do nosso
          site. Por favor, verifique a Notificação de Privacidade, Notificação
          de Cookies e a Notificação de Anúncios Baseados em Interesse.{" "}
        </Text>
      </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 15
  },

  container2: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderWidth: 2,
    borderColor: "silver",
  },

  textImput: {
    borderWidth: 1,
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  textoCadastro: {
    fontSize: 2,
    marginBottom: 10,
  },
  texto: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 20,
  },
  buttonEntrar: {
    backgroundColor: "green",
    width: "90%",
    height: 60,
    borderRadius: 15,
    marginBottom: 20,
  },
  buttonCadastrar: {
    backgroundColor: "lightblue",
    width: "80%",
    height: 50,
    borderRadius: 15,
  },

  textoEntrar: {
    padding: 15,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
  textoCadastrar: {
    padding: 15,
    textAlign: "center",
    color: "#141414",
    fontSize: 15,
  },

  textoCondicoes: {
    padding: 15,
    color: "#141414",
    fontSize: 13,
  },
});
