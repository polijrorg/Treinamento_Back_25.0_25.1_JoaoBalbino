import { Router } from 'express';

import UserService from '../services/UserService';

const UsersRouter = Router();

// ========================================
// CREATE → Criar um novo herói
// ========================================
/**
 * Rota: POST /heroes
 * Espera receber no corpo da requisição (req.body):
 * {
 *   "name": "Superman",
 *   "power": "Força sobre-humana"
 * }
 *
 * Esta rota chama o método 'create' do HeroService,
 * que por sua vez cria o herói e o armazena via HeroRepository.
 */

UsersRouter.post('/create', (req, res) => {
  const { name, email, senha, UserName, celular } = req.body;

  if (!name || !email || !senha || !UserName || !celular) {
    return res.status(400).json({
      message: 'Campos que são obrigatórios não foram preenchidos',
    });
  }

  const User = UserService.create(name, email, senha, UserName, celular);
  return res.status(201).json(User);
});

// ========================================
// READ → Leitura de heróis
// ========================================

/**
 * Rota: GET /heroes
 * Retorna todos os heróis armazenados.
 *
 * Esta rota chama o método 'listAll' do HeroService,
 * que busca os dados no HeroRepository.
 */

UsersRouter.get('/all-Users', (req, res) => {
  const users = UserService.listAll();
  return res.json(users);
});

/**
 * Rota: GET /heroes/:id
 * Espera receber um ID na URL como parâmetro de rota.
 * Exemplo: /heroes/123abc
 *
 * Chama o método 'findById' do HeroService, que retorna o herói correspondente.
 * Caso não encontre, retorna erro 404.
 */

UsersRouter.get('/find-user:id', (req, res) => {
  const user = UserService.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.json(user);
});

// ========================================
// UPDATE → Atualizar um herói existente
// ========================================
/**
 * Rota: PUT /heroes/:id
 * Espera receber um ID na URL (params) e os novos dados no corpo (body):
 * {
 *   "name": "Batman",
 *   "power": "Inteligência estratégica"
 * }
 *
 * Esta rota chama o método 'update' do HeroService,
 * que verifica se o herói existe e, se sim, atualiza os dados no HeroRepository.
 */

UsersRouter.put('/update-user:id', (req, res) => {
  const { name, email, senha, UserName, celular } = req.body;

  if (!name || !name || !email || !senha || !UserName || !celular) {
    return res.status(400).json({
      message: 'Campos que são obrigatórios não foram preenchidos',
    });
  }

  const updatedUser = UserService.update(
    req.params.id,
    name,
    email,
    senha,
    UserName,
    celular
  );

  if (!updatedUser) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.json(updatedUser);
});

// ========================================
// DELETE → Remover um herói do sistema
// ========================================
/**
 * Rota: DELETE /heroes/:id
 * Espera receber um ID na URL como parâmetro.
 *
 * Esta rota chama o método 'delete' do HeroService,
 * que procura o herói e o remove do array usando o HeroRepository.
 * Se o herói não for encontrado, retorna erro 404.
 */

UsersRouter.delete('/delete-user:id', (req, res) => {
  const deleted = UserService.delete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.status(204).send(); // Sem conteúdo
});

export default UsersRouter;
