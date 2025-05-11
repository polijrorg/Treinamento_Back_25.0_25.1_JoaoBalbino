import Piu from '../models/Piu';

interface ICreatePiuDTO {
  id: string;
  UserName: string;
  texto: string;
}

interface IUpdatePiuDTO {
  id: string;
  data: {
    UserName: string;
    texto: string;
  };
}

class PiuRepository {
  private pius: Piu[];

  constructor() {
    // Nosso "banco de dados" será um array de heróis em memória
    this.pius = [];
  }

  // ========================================
  // CREATE → Cria e armazena um novo herói
  // ========================================
  public create(data: ICreatePiuDTO): Piu {
    const { id, UserName, texto } = data;

    const piu = new Piu(id, UserName, texto);
    this.pius.push(piu); // salva no array

    return piu;
  }

  // ========================================
  // READ → Leitura de dados
  // ========================================

  // Retorna todos os heróis cadastrados
  public getAll(): Piu[] {
    return this.pius;
  }
  public getById(id: string): Piu | undefined {
    return this.pius.find(piu => piu.id === id);
  }

  // Retorna o índice (posição) do herói no array
  public findIndexById(id: string): number {
    return this.pius.findIndex(piu => piu.id === id);
  }

  // ========================================
  // UPDATE → Atualiza um herói existente
  // ========================================
  public update(data: IUpdatePiuDTO): Piu {
    const index = this.findIndexById(data.id);

    this.pius[index] = {
      ...this.pius[index], // mantém dados antigos
      ...data.data, // sobrescreve com dados novos
    };

    return this.pius[index];
  }

  // ========================================
  // DELETE → Remove um herói do array
  // ========================================
  public delete(index: number): void {
    this.pius.splice(index, 1); // remove 1 elemento na posição index
  }
}

export default PiuRepository;
