import { Router } from 'express';

// Importa o módulo de rotas dos heróis
import UsersRouter from './users.routes';

const routes = Router();

/**
 * Agrupa todas as rotas definidas em heroes.routes.ts
 * e as coloca sob o prefixo /heroes.
 *
 * Exemplo:
 * - GET     /heroes
 * - POST    /heroes
 * - GET     /heroes/:id
 * - etc.
 */

routes.use('/users', UsersRouter);

// Exporta o roteador para ser usado no servidor principal
export default routes;
