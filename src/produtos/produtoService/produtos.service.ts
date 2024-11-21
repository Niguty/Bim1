import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';
import { Produto } from '../entities/produto.entity';

@Injectable()
export class ProdutosService {
  private readonly produtos: Produto[] = [];

  create(createProdutoDto: CreateProdutoDto): Produto[] {
    const novoProduto = { ...createProdutoDto }; 
    this.produtos.push(novoProduto); 
    return this.produtos; 
  }

  findAll(): Produto[] {
    return this.produtos;
  }

  findOne(id: number): Produto | string {
    const produto = this.produtos.find((produto) => produto.id === id);

    if(!produto) {
      return `Produto com ID ${id} não encontrado.`;
    }

    return produto;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto): string {
    const userIndex = this.produtos.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return `Produto com ID ${id} não encontrado.`;
    }

    const updatedUser = { ...this.produtos[userIndex], ...updateProdutoDto };
    this.produtos[userIndex] = updatedUser;

    return `Produto com ID ${id} atualizado com sucesso!`;
  }

  remove(id: number): string {
    const userIndex = this.produtos.findIndex((produto) => produto.id === id);

    if (userIndex === -1) {
      return `Produto com ID ${id} não encontrado.`;
    }

    this.produtos.splice(userIndex, 1);

    return `Produto com ID ${id} removido com sucesso!`;
  }
}
