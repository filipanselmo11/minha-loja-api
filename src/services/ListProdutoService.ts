import { prismaClient } from "../prisma";

export class ListProdutoService {
    async execute() {
        const produtos = await prismaClient.produto.findMany();
        return produtos;
    }
}