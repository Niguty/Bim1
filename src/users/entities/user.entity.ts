import { Role } from "../guard/role.enum";

export class User {
    UserId: number;
    username: string;
    password: string;
    email: string;
    roles: Role[];
  }
  