import { randomUUID } from 'crypto';

import Piu from '../models/Piu';
import PiuRepository from '../repositories/PiuRepository';

class PiuService {
  private repository: PiuRepository;

  constructor() {
    // Cria uma instância do repositório que gerencia os heróis
    this.repository = new PiuRepository();
  }

  // ========================================
  // CREATE → Criação de novo herói
  // ========================================
  /**
   * Cria um novo herói com os dados fornecidos.
   * Aqui é gerado um ID aleatório usando a biblioteca crypto,
   * e em seguida o método 'create' do repositório é chamado
   * para armazenar o herói na fonte de dados (array em memória).
   */
  public create(UserName: string, texto: string): Piu {
    const id = randomUUID(); // Gera um ID único

    const piu = this.repository.create({
      id,
      UserName,
      texto,
    });

    return piu;
  }

  // ========================================
  // READ → Leitura de heróis
  // ========================================

  // Lista todos os heróis existentes

  public listAll(): Piu[] {
    return this.repository.getAll();
  }

  public findById(id: string): Piu | undefined {
    return this.repository.getById(id);
  }

  // ========================================
  // DELETE → Remoção de herói
  // ========================================
  /**
   * Remove um herói com base no ID.
   * Primeiro encontra o índice do herói,
   * depois chama o método 'delete' do repositório
   * para removê-lo do array.
   */
  public delete(id: string): boolean {
    const index = this.repository.findIndexById(id);

    if (index === -1) return false;

    this.repository.delete(index);
    return true;
  }
}

export default new PiuService();
