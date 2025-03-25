import { PipeTransform, Injectable, BadRequestException } from "@nestjs/common";
import { BadRequestExceptionGlobal } from "../exceptions/bad-request.exception";

@Injectable()
export class CuidValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!/^c[a-z0-9]{24}$/i.test(value)) {
      throw new BadRequestExceptionGlobal("Formato de CUID inválido.",{
        cause: "Este formato esta incorrecto"
      },);
    }
    return value;
  }
}