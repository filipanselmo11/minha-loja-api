import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateProdutoController } from "./controllers/CreateProdutoController";
import { ListProdutoController } from "./controllers/ListProdutoController";

export const routes = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {

  fastify.post('/produto', async(request: FastifyRequest, reply: FastifyReply) => {
    return new CreateProdutoController().handle(request, reply);
  });

  fastify.get('/produtos', async(request: FastifyRequest, reply: FastifyReply) => {
    return new ListProdutoController().handle(request, reply);
  });

}
