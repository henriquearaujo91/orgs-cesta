import { Image, ListRenderItemInfo, StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";
import { ItemCesta } from "../../../mocks/interfaces";

export default function Item(info: ListRenderItemInfo<ItemCesta>) {
    return <View style={estilos.item}>
        <Image style={estilos.imagem} source={info.item.imagem} />
        <Texto style={estilos.nome}>{info.item.nome}</Texto>
    </View>
}


const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
        marginHorizontal: 16
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
