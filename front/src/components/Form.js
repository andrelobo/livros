import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getLivros, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const livro = ref.current;

      livro.nome.value = onEdit.nome;
      livro.autor.value = onEdit.autor;
      livro.genero.value = onEdit.genero;
      
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const livro = ref.current;

    if (
      !livro.nome.value ||
      !livro.autor.value ||
      !livro.genero.value 
      
     ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:3333/livros/" + onEdit.id, {
          nome: livro.nome.value,
          autor: livro.autor.value,
          genero: livro.genero.value,
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:3333/livros", {
          nome: livro.nome.value,
          autor: livro.autor.value,
          genero: livro.genero.value,
         
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    livro.nome.value = "";
    livro.autor.value = "";
    livro.genero.value = "";
    

    setOnEdit(null);
    getLivros();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>Autor</Label>
        <Input name="autor"/>
      </InputArea>
      <InputArea>
        <Label>Genero</Label>
        <Input name="genero" />
      </InputArea>
      

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
