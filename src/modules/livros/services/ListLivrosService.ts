
import { getCustomRepository } from "typeorm";
import Livro from "../typeorm/entities/Livro";
import LivroRepository from "../typeorm/repositories/LivrosRepository";


class ListLivroService {
  public async execute(): Promise<Livro[]> {
    const livrosRepository = getCustomRepository(LivroRepository);


    const livros = await livrosRepository.find();


    return livros;
  }
}

export default ListLivroService;
