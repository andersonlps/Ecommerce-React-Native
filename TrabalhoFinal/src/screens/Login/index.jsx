import { useState, useContext } from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import AuthContext from '../../contexts/AuthContext';
import {styles} from './styles';

const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { loginContext } = useContext(AuthContext)

  const handleLogin = async () => {
    if(userName != "" && password != "") {
      loginContext(userName, password)
    } else {
        alert("Preencha todos os campos")
    }
  }

    return (
        <View style={styles.container}>
            <Text style={styles.textoLogin}>Login</Text>
            <Text style={styles.texto}>Já possui uma conta?</Text>
            <TextInput style={styles.textImput} placeholder="    DIGITE SEU E-MAIL" onChangeText={setUserName} value={userName} />
            <TextInput style={styles.textImput} placeholder="    DIGITE SUA SENHA" onChangeText={setPassword} value={password} />
            <TouchableOpacity style={styles.buttonEntrar} onPress={() =>  handleLogin()}><Text style={styles.textoEntrar}>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonCadastrar}><Text style={styles.textoCadastrar}>Não tem uma conta? Cadastre-se!</Text></TouchableOpacity>
        </View>
    );
};
export default Login;