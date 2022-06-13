import { Dimensions, Image, StyleSheet } from "react-native";

import Texto from "../../../componentes/Texto";
import { TextoCesta } from "../../../mocks/interfaces";

const widthScreen = Dimensions.get("screen").width;
const heightImage = 578;
const widthImage = 768;

export default function Topo(textoCesta: TextoCesta) {
    return <>
        <Image source={textoCesta.topo.imagem} style={estilos.topo} />
        <Texto style={estilos.titulo}>{textoCesta.topo.titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: heightImage / widthImage * widthScreen,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#fff",
        fontWeight: "bold",
        padding: 16
    },
})