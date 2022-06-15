import React from "react";
import { GestureResponderEvent, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import Texto from "../../../componentes/Texto";

type Props = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    onPress?: (event: GestureResponderEvent) => void;
}

export default function Botao({ children, style, onPress }: Props) {
    return <>
        <TouchableOpacity style={[style, estilos.botao]} onPress={onPress}>
            <Texto style={estilos.textoBotao}>{children}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao: {
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