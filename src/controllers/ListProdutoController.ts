import { FastifyRequest, FastifyReply } from "fastify";
import { ListProdutoService } from "../services/ListProdutoService";

export class ListProdutoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listProdService = new ListProdutoService();
        const produtos = await listProdService.execute();
        reply.send(produtos);
    }
}