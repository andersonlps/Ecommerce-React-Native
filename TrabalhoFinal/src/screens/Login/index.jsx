import { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles';

export const Login = () => {
    const [userName, setUserName] = useState("")
    const [passoword, setPassoword] = useState("")
   
    return (
        <View style={styles.container}>
            <Text style={styles.textoLogin}>Login</Text>
            <Text style={styles.texto}>Já possui uma conta?</Text>
            <TextInput style={styles.textImput} placeholder="    DIGITE SEU E-MAIL" onChange={setUserName} value={userName} />
            <TextInput style={styles.textImput} placeholder="    DIGITE SUA SENHA" onChange={setPassoword} value={passoword} />
            <TouchableOpacity style={styles.buttonEntrar}><Text style={styles.textoEntrar}>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonCadastrar}><Text style={styles.textoCadastrar}>Não tem uma conta? Cadastre-se!</Text></TouchableOpacity>
        </View>
    );
};