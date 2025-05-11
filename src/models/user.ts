class User {
  id: string; // Identificador único do herói
  name: string; // Nome do herói (ex: Batman)
  email: string; // Poder ou habilidade principal (ex: Inteligência)
  senha: string;
  UserName: string;
  celular: string;

  /**
   * Construtor para criar um novo herói com base nos dados fornecidos
   */
  constructor(
    id: string,
    name: string,
    email: string,
    senha: string,
    UserName: string,
    celular: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.senha = senha;
    this.UserName = UserName;
    this.celular = celular;
  }
}

export default User;
