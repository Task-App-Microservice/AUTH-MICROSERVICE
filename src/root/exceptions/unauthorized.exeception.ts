import { UnauthorizedException } from "@nestjs/common";


export class UnauthorizedExceptionGlobal<T> extends UnauthorizedException{
    constructor(message: string = "Operçao não autorizada", error?: T, instance?: string){
        super({
            statusCode: 401,
            success: false,
            detail: message,
            data: null,
            instance: instance || "/auth",
            error: error || null,
            timestamp: new Date().toISOString()
        })
    }
}