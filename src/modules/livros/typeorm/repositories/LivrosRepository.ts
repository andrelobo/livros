import { EntityRepository, Repository } from "typeorm";
import Livro from "../entities/Livro"

@EntityRepository(Livro)
class LivrosRepository extends Repository<Livro> {

  public async findByName(nome: string): Promise<Livro | undefined> {

    const livro = await this.findOne({
      where: {
        nome,
      },
    });

    return livro;

  }

  public async findById(id: string): Promise<Livro | undefined> {

    const livro = await this.findOne({
      where: {
        id,
      },
    });

    return livro;

  }



}





export default LivrosRepository;
