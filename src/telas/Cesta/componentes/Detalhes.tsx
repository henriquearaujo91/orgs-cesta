import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import Texto from "../../../componentes/Texto";
import { TextoCesta } from "../../../mocks/interfaces";

export default function Detalhes(textoCesta: TextoCesta) {

    return <>
        <Texto style={estilos.nome}>{textoCesta.detalhes.nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={textoCesta.detalhes.logoFazenda} style={estilos.imagemFazenda}></Image>
            <Texto style={estilos.nomeFazenda}>{textoCesta.detalhes.nomeFazenda}</Texto>

        </View>
        <Texto style={estilos.descricao}>
            {textoCesta.detalhes.descricao}
        </Texto>
        <Texto style={estilos.preco}>{textoCesta.detalhes.preco}</Texto>
        <TouchableOpacity style={estilos.botao} onPress={() => {console.log("ola!!!")}}>
            <Texto style={estilos.textoBotao}>{textoCesta.detalhes.botao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})