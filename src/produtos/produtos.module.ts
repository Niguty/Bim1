import { Module } from '@nestjs/common';
import { ProdutosService } from './produtoService/produtos.service';
import { ProdutosController } from './produtoController/produtos.controller';


@Module({
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
