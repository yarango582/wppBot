import { HttpCodes } from "../enums/httpCodes.enum";

export interface IRouteResponses {
    httpCode: HttpCodes,
    body: any
}