import { FastifyRequest, FastifyReply } from "fastify";
import { CreateProdutoService } from "../services/CreateProdutoService";

export class CreateProdutoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { nome, quantidade, preco, disponivel } = request.body as { nome: string, quantidade: number, preco: string, disponivel: boolean };
        const produtoService = new CreateProdutoService();
        const produto = await produtoService.execute({
            nome,
            quantidade,
            preco,
            disponivel
        });
        reply.send(produto);
    }
}