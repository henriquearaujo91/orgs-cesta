import { StyleSheet, Text, TextStyle } from "react-native";

type Props = {
    children: React.ReactNode;
    style?: TextStyle;
}

export default function Texto({ children, style }: Props) {
    let estilo = estilos.texto;

    if (style?.fontWeight === "bold") {
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})