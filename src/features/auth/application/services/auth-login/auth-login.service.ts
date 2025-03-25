import { Injectable } from "@nestjs/common";
import { compare } from "bcrypt";
import { LoginDto } from "src/features/auth/adapters/out/dto/login.dto";
import { ReadUserImplService } from "src/features/user/application/services/read/read-user-impl.service";
import { UnauthorizedExceptionGlobal } from "src/root/exceptions/unauthorized.exeception";


@Injectable()
export class AuthLoginService {
  constructor(private readonly readUserService: ReadUserImplService) { }

  async login(body: LoginDto) {

    const user = await this.validator(body.email, body.password);

    return {
      clientId: user.uuid,
      userId: user.id
    };

  }

  async validator(email: string,password: string){
    const userExisting = await this.readUserService.findOneByEmail(email);

    if (!userExisting) {
      throw new UnauthorizedExceptionGlobal("Credenciais inválidas. Verifique seu e-mail e senha.", [
        {
          field: "email",
          message: "O e-mail fornecido não foi encontrado."
        }
      ]);
    }

    const verifyPassword = await compare(password, userExisting.password);

    if (!verifyPassword) {
      throw new UnauthorizedExceptionGlobal("Credencials invalidos, verififique a senha ou email", [
        {
          field: "password",
          message: "A senha está incorreta"
        }
      ]);
    }

    if (!userExisting.emailVerified) {
      throw new UnauthorizedExceptionGlobal("Esta conta não esta verificada, verifique porfavor",[
        {
          field: "email",
          message: "O e-mail fornecido não foi verificado."
        }
      ]);
    }

    return userExisting
  }
}
