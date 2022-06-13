import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

import { TextoCesta } from "./interfaces";

const cesta: TextoCesta = {
    topo: {
        titulo: "Detalhe da cesta",
        imagem: topo
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.",
        preco: "R$ 40,00"

    }
}

export default cesta;