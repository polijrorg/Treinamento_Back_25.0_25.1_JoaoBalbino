import { randomUUID } from 'crypto';

import User from '../models/user';
import UserRepository from '../repositories/UserRepository';

class UserService {
  private repository: UserRepository;

  constructor() {
    // Cria uma instância do repositório que gerencia os heróis
    this.repository = new UserRepository();
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
  public create(
    name: string,
    email: string,
    senha: string,
    UserName: string,
    celular: string
  ): User {
    const id = randomUUID(); // Gera um ID único

    const user = this.repository.create({
      id,
      name,
      email,
      senha,
      UserName,
      celular,
    });

    return user;
  }

  // ========================================
  // READ → Leitura de heróis
  // ========================================

  // Lista todos os heróis existentes
  public listAll(): User[] {
    return this.repository.getAll();
  }

  // Busca um herói específico pelo ID
  public findById(id: string): User | undefined {
    return this.repository.getById(id);
  }

  // ========================================
  // UPDATE → Atualização de herói
  // ========================================
  /**
   * Atualiza os dados de um herói existente.
   * Primeiro verifica se o herói com o ID existe.
   * Se existir, chama o método 'update' do repositório
   * para sobrescrever os dados no array.
   * Caso contrário, retorna null.
   */
  public update(
    id: string,
    name: string,
    email: string,
    senha: string,
    UserName: string,
    celular: string
  ): User | null {
    const existingProduct = this.repository.getById(id);

    if (!existingProduct) return null;

    return this.repository.update({
      id,
      data: {
        name,
        email,
        senha,
        UserName,
        celular,
      },
    });
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

export default new UserService();
