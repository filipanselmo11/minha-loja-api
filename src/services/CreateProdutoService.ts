import { prismaClient } from "../prisma";

interface CreateProdutoProps {
    nome: string;
    quantidade: number;
    preco: string;
    disponivel: boolean;
}

export class CreateProdutoService {
    async execute({ nome, quantidade, preco, disponivel}: CreateProdutoProps) {
        if (!nome || !quantidade || !preco || !disponivel) {
            throw new Error("Preencha todos os campos");
        }

        const produto = await prismaClient.produto.create({
            data: {
                nome,
                quantidade,
                preco,
                disponivel
            },
        });

        return produto;
    }
}