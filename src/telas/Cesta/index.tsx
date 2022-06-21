import { ScrollView, StyleSheet, View } from "react-native";

import { TextoCesta } from "../../mocks/interfaces";
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/itens";
import Topo from "./componentes/Topo";

export default function Cesta(textoCesta: TextoCesta) {
    return <ScrollView>
        <Topo {...textoCesta} />
        <View style={estilos.cesta}>
            <Detalhes {...textoCesta} />
            <Itens {...textoCesta} />
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})