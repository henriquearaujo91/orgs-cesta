import { Image, StyleSheet, Dimensions, Text } from "react-native";

import topo from "../../assets/topo.png";

const widthScreen = Dimensions.get("screen").width;
const heightImage = 578;
const widthImage = 768;

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhe da cesta</Text>
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
    }
})