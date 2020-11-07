import { Categoria } from './Categoria';

export interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  imageUrl: string;
  isDisponivel: boolean;
  categoria: Categoria[];
}
