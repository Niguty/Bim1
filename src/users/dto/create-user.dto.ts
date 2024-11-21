import { IsNotEmpty, IsString } from "class-validator";
import { Role } from "../guard/role.enum";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    roles: Role[]; 
}