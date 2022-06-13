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
    };
}
