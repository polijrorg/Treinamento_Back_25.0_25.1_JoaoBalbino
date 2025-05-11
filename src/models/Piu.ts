class Piu {
  id: string; // Identificador único do herói
  texto: string;
  UserName: string;

  /**
   * Construtor para criar um novo herói com base nos dados fornecidos
   */
  constructor(id: string, texto: string, UserName: string) {
    this.id = id;
    this.UserName = UserName;
    this.texto = texto;
  }
}

export default Piu;
