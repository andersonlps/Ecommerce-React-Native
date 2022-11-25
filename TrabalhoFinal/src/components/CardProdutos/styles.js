import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    cardContainer: {
        flex:1,
        borderRadius: 10,
        margin: 7,
        height: 350,
        widht:"100%",
    },
    nome: {
       
        fontSize: 30,
        textAlign: "center"
    },
    valor:{
        fontSize: 25,
        textAlign: "center",
    },
    textos:{
        justifyContent: "space-around",
        alignItems:"center",
        height: "45%",
    },
    img: { 
        height: 190,
        width: 120,
    }
});