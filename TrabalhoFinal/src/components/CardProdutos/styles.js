import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        borderWidth:  1,
        borderRadius: 10,
        margin: 7,
        height: "100%",
        widht:"90%"
    },
    nome: {
        fontSize: 30,
    },
    valor:{
        marginTop:5,
        fontSize: 27,
    },
    img: { 
        height: 190,
        width: "100%",
    }
});