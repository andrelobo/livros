import { Request, Response } from "express";
import CreateLivroService from "../services/CreateLivroService";
import DeleteLivroService from "../services/DeleteLivroService";
import ListLivrosService from "../services/ListLivrosService";
import ShowLivroByNameService from "../services/ShowLivroByName";
import ShowLivroService from "../services/ShowLivroService";
import UpdateLivrosService from "../services/UpdateLivrosService";


export default class LivrosController {

  public async index(request: Request, response: Response): Promise<Response> {

    const listLivros = new ListLivrosService();

    const livros = await listLivros.execute();

    return response.json(livros);

  }


  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showLivro = new ShowLivroService();

    const livro = await showLivro.execute({ id });

    return response.json(livro);

  }
  public async showByName(request: Request, response: Response): Promise<Response> {
    const { nome } = request.params;

    const showLivro = new ShowLivroByNameService();

    const livro = await showLivro.execute({ nome });

    return response.json(livro);

  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { nome, autor, genero, capa } = request.body;

    const createLivro = new CreateLivroService();

    const livros = await createLivro.execute({

      nome: nome,
      autor: autor,
      genero: genero,
      capa: capa
    });

    return response.json(livros);
  }



  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, autor, genero, capa } = request.body;

    const { id } = request.params;

    const updatedLivro = new UpdateLivrosService();

    const livro = await updatedLivro.execute({ id, nome, autor, genero, capa });

    return response.json(livro);


  }




  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletedLivro = new DeleteLivroService();

    await deletedLivro.execute({ id });

    return response.json([]);

  }

}
