import { useState } from 'react';
import {  Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles';

export const Login = ({navigation}) => {
    const [userName, setUserName] = useState("")
    const [passoword, setPassoword] = useState("")
   
    return (
        <View style={styles.container}>
            <Text style={styles.textoLogin}>Login</Text>
            <Text style={styles.texto}>Já possui uma conta?</Text>
            <TextInput style={styles.textImput} placeholder="    DIGITE SEU E-MAIL" onChange={setUserName} value={userName} />
            <TextInput style={styles.textImput} placeholder="    DIGITE SUA SENHA" onChange={setPassoword} value={passoword} />
            <TouchableOpacity style={styles.buttonEntrar} onPress={() => navigation.navigate('Home')}><Text style={styles.textoEntrar}>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonCadastrar} onPress={() =>   navigation.navigate('Cadastro')}><Text style={styles.textoCadastrar}>Não tem uma conta? Cadastre-se!</Text></TouchableOpacity>
        </View>
    );
};