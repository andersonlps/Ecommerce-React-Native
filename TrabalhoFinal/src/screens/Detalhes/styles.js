import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        flex:1,
        borderRadius: 0,
        // margin: 7,
        height: "100%",
        widht:"100%",  
        // backgroundColor: "#000"  
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
    },
    btnVoltar:{
        marginLeft: 10
    },
    btnPlus:{
        marginRight: 10
    },
    header:{
        flexDirection: "row",
        // backgroundColor:"lightblue",
        justifyContent:"space-between",
        alignItems:"center",
        height: "5%",
        alignIems:"center",
        marginBottom:10,
        marginTop:3
    },
    info:{
        fontSize: 18,
        textAlign:"center"
    }
});