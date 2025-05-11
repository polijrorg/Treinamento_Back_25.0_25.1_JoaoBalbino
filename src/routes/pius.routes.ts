import { Router } from 'express';

import PiuService from '../services/PiuService';

const PiusRouter = Router();

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

PiusRouter.post('/create', (req, res) => {
  const { UserName, texto } = req.body;

  if (!UserName || !texto) {
    return res.status(400).json({
      message: 'Campos que são obrigatórios não foram preenchidos',
    });
  }

  const Piu = PiuService.create(UserName, texto);
  return res.status(201).json(Piu);
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

PiusRouter.get('/all-Pius', (req, res) => {
  const pius = PiuService.listAll();
  return res.json(pius);
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

PiusRouter.delete('/delete-user:id', (req, res) => {
  const deleted = PiuService.delete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Piu não encontrado' });
  }

  return res.status(204).send(); // Sem conteúdo
});

export default PiusRouter;
