
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";

import LivrosRepository from "../typeorm/repositories/LivrosRepository";


interface IRequest {

  id: string;
}

class DeleteLivroService {
  public async execute({ id }: IRequest): Promise<void> {
    const livrosRepository = getCustomRepository(LivrosRepository);


    const livro = await livrosRepository.findOne(id);

    if (!livro) {

      throw new AppError('Livro not found !')

    }

    await livrosRepository.remove(livro);
  }
}

export default DeleteLivroService;


