import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";
import { ItemCesta, TextoCesta } from "../../../mocks/interfaces";

export default function Itens(textCesta: TextoCesta) {
    return <>
        <Texto style={estilos.titulo}>{textCesta.itens.titulo}</Texto>
        {textCesta.itens.lista.map((item: ItemCesta) => {
            return <View key={item.cod} style={estilos.item}>
                <Image source={item.imagem} style={estilos.imagem} />
                <Texto style={estilos.nome}>{item.nome}</Texto>
            </View>
        })}
    </>
}


const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center"
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }

});
