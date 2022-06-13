import { StyleSheet, View } from "react-native";

import { TextoCesta } from "../../mocks/interfaces";
import Detalhes from "./componentes/Detalhes";
import Topo from "./componentes/Topo";

export default function Cesta(textoCesta: TextoCesta) {
    return <>
        <Topo {...textoCesta} />
        <View style={estilos.cesta}>
            <Detalhes {...textoCesta} />
        </View>

    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})