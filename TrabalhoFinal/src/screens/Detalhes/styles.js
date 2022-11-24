import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        flex:1,
        borderRadius: 10,
        margin: 7,
        height: 350,
        widht:"100%",    
    },
    nome: {
       marginTop:10,
        fontSize: 30,
    },
    valor:{
        marginTop:5,
        fontSize: 25,
    },
    descricao:{
        marginTop:5,
        fontSize: 13,
    },
    qtd:{
        marginTop:5,
        fontSize: 13,
    },
    img: { 
        height: 400,
        width: "100%",
    }
});