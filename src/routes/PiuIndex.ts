import { Router } from 'express';

// Importa o módulo de rotas dos heróis
import PiusRouter from './pius.routes';

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

routes.use('/pius', PiusRouter);

// Exporta o roteador para ser usado no servidor principal
export default routes;
