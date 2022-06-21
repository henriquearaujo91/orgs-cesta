import { FlatList, StyleSheet, View } from "react-native";
import Texto from "../../componentes/Texto";

import { ItemCesta, TextoCesta } from "../../mocks/interfaces";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/item";
import Topo from "./componentes/Topo";

export default function Cesta(textoCesta: TextoCesta) {
    const keyItem = (item: ItemCesta) => item.cod.toString();
    const content = () => {
        return <>
            <Topo {...textoCesta} />

            <View style={estilos.cesta}>
                <Detalhes {...textoCesta} />
                <Texto style={estilos.titulo}>{textoCesta.itens.titulo}</Texto>
            </View>
        </>
    }

    return <>
        <FlatList
            data={textoCesta.itens.lista}
            renderItem={Item}
            keyExtractor={keyItem}
            ListHeaderComponent={content}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})