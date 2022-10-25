
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Livro from "../typeorm/entities/Livro";
import LivroRepository from "../typeorm/repositories/LivrosRepository";

interface IRequest {

    id: string;
}

class ShowLivroService {
    public async execute({ id }: IRequest): Promise<Livro> {
        const livrosRepository = getCustomRepository(LivroRepository);


        const livro = await livrosRepository.findOne(id);

        if (!livro) {

            throw new AppError('Livro not found !');

        }
        return livro;
    }
}

export default ShowLivroService;


