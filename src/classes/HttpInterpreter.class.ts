import { HttpError, Res } from "routing-controllers";
import { Response } from "express";
import { HttpCodes } from "../enums/httpCodes.enum";

export class HttpResponseInterpreter extends HttpError {
    constructor(statusCode: HttpCodes, message: string) {
        super(statusCode, message)
    }
    static succes(message: any, @Res() res: Response, statusCode: HttpCodes = 200) {
        return res.status(statusCode).json({
            httpCode: statusCode,
            ...message
        });
    }
}