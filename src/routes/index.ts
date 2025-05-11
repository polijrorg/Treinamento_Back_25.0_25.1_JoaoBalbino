import { Router } from 'express';

// Importa o módulo de rotas dos heróis
import heroesRouter from './heroes.routes';
import PiusRouter from './pius.routes';
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

routes.use('/heroes', heroesRouter);
routes.use('/users', UsersRouter);
routes.use('/pius', PiusRouter);

export default routes;
