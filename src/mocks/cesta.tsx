import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

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
        preco: "R$ 40,00",
        botao: "Comprar"

    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                cod: 1,
                nome: "Tomate",
                imagem: tomate,
            },
            {
                cod: 2,
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                cod: 3,
                nome: "Batata",
                imagem: batata,
            },
            {
                cod: 4,
                nome: "Pepino",
                imagem: pepino,
            },
            {
                cod: 5,
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    }
}

export default cesta;