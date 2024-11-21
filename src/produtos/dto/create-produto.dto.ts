import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateProdutoDto {

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsInt()
    @IsNotEmpty()
    preco: number;
  }