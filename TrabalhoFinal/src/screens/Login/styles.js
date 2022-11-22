import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: 'center',
        alignContent: "center",
    },
    textImput: {
        borderWidth: 1,
        width: "70%",
        height: 50,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 30
        
    },
    textoLogin: {
        fontSize: 30,
        marginBottom: 30
    },
    texto: {
        fontSize: 20,
        fontWeight: "800",
        marginBottom: 30
    },
    buttonEntrar: {
        backgroundColor: 'green',
        width: "90%",
        height: 60,
        borderRadius: 15,
        marginBottom: 20
    },
    buttonCadastrar: {
        backgroundColor: 'lightblue',
        width: "90%",
        height: 60,
        borderRadius: 15,
    },
    textoEntrar: {
        padding: 15,
        textAlign: "center",
        color: '#fff',
        fontSize: 20
    },
    textoCadastrar: {
        padding: 15,
        textAlign: "center",
        color: '#141414',
        fontSize: 20,
    }
});