import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import LivrosRepository from "../typeorm/repositories/LivrosRepository";
import Livro from "../typeorm/Livros";


interface IRequest {
  nome: string;
  autor: string;
  genero: string;
  capa: string;

}


class CreateLivroService {
  public async execute({ nome, autor, genero, capa }: IRequest): Promise<Livro> {
    const livrosRepository = getCustomRepository(LivrosRepository);
    const nomeExists = await livrosRepository.findByName(nome);

    if (nomeExists) {
      throw new AppError(`Livro ${nome} already exists`);

    }

    const livro = livrosRepository.create({

      nome: nome,
      autor: autor,
      genero: genero,
      capa: capa,

    });

    await livrosRepository.save(livro);

    return livro;
  }
}

export default CreateLivroService;
