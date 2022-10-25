
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Livro from "../typeorm/entities/Livro";
import LivroRepository from "../typeorm/repositories/LivrosRepository";

interface IRequest {

    nome: string;
}

class ShowLivroByNameService {
    public async execute({ nome }: IRequest): Promise<Livro> {
        const livrosRepository = getCustomRepository(LivroRepository);


        const livro = await livrosRepository.findOne(nome);

        if (!livro) {

            throw new AppError('Livro not found !');

        }
        return livro;
    }
}

export default ShowLivroByNameService;


