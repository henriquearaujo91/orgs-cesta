import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../../componentes/Texto";
import { TextoCesta } from "../../../mocks/interfaces";

export default function Botao(textoCesta: TextoCesta) {
    return <>
        <TouchableOpacity style={estilos.botao} onPress={() => { console.log("ola!!!") }}>
            <Texto style={estilos.textoBotao}>{textoCesta.detalhes.botao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
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