import { ImageProps } from "react-native";

export interface TextoCesta {
    topo: {
        titulo: string;
        imagem: ImageProps;
    };
    detalhes: {
        nome: string;
        logoFazenda: ImageProps;
        nomeFazenda: string;
        descricao: string;
        preco: string;
        botao: string;
    };
    itens: {
        titulo: string;
        lista: Array<ItemCesta>;
    };
}

export interface ItemCesta {
    nome: string;
    imagem: ImageProps;
}