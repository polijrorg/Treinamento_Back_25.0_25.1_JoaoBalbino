import User from '../models/user';

interface ICreateUserDTO {
  id: string;
  name: string;
  email: string;
  senha: string;
  UserName: string;
  celular: string;
}

interface IUpdateUserDTO {
  id: string;
  data: {
    name: string;
    email: string;
    senha: string;
    UserName: string;
    celular: string;
  };
}

class UserRepository {
  private users: User[];

  constructor() {
    // Nosso "banco de dados" será um array de heróis em memória
    this.users = [];
  }

  // ========================================
  // CREATE → Cria e armazena um novo herói
  // ========================================
  public create(data: ICreateUserDTO): User {
    const { id, name, email, senha, UserName, celular } = data;

    const user = new User(id, name, email, senha, UserName, celular);
    this.users.push(user); // salva no array

    return user;
  }

  // ========================================
  // READ → Leitura de dados
  // ========================================

  // Retorna todos os heróis cadastrados
  public getAll(): User[] {
    return this.users;
  }

  // Busca um herói específico pelo ID
  public getById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Retorna o índice (posição) do herói no array
  public findIndexById(id: string): number {
    return this.users.findIndex(user => user.id === id);
  }

  // ========================================
  // UPDATE → Atualiza um herói existente
  // ========================================
  public update(data: IUpdateUserDTO): User {
    const index = this.findIndexById(data.id);

    this.users[index] = {
      ...this.users[index], // mantém dados antigos
      ...data.data, // sobrescreve com dados novos
    };

    return this.users[index];
  }

  // ========================================
  // DELETE → Remove um herói do array
  // ========================================
  public delete(index: number): void {
    this.users.splice(index, 1); // remove 1 elemento na posição index
  }
}

export default UserRepository;
