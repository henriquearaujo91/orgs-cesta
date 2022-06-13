import { Dimensions, Image, StyleSheet } from "react-native";

import topo from "../../../../assets/topo.png";
import Texto from "../../../componentes/Texto";

const widthScreen = Dimensions.get("screen").width;
const heightImage = 578;
const widthImage = 768;

export default function Topo() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
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