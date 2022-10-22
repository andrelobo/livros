
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Livro from "../typeorm/entities/Livro";
import LivrosRepository from "../typeorm/repositories/LivrosRepository";

interface IRequest {

  id: string;
  nome: string;
  autor: string;
  genero: string;
  capa: string;
}

class UpdateLivroService {
  public async execute({ id, nome, autor, genero, capa }: IRequest): Promise<Livro> {
    const livrosRepository = getCustomRepository(LivrosRepository);


    const livro = await livrosRepository.findOne(id);

    if (!livro) {

      throw new AppError('Livro not found !')

    }

    const livroExists = await livrosRepository.findByName(nome);

    if (livroExists && nome != livro.nome) {

      throw new AppError('there is already a livro with this name ');

    }

    livro.nome = nome;
    livro.autor = autor;
    livro.genero = genero;
    livro.capa = capa;

    await livrosRepository.save(livro);

    return livro;
  }

}

export default UpdateLivroService;


