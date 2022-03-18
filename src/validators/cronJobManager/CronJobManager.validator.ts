import { IsString, IsNotEmpty } from "class-validator";

export class CronJobManagerValidator {

    @IsNotEmpty({
        message: "validator:isNotEmpty"
    })
    @IsString({
        message: "validator:isString"
    })
    key: string;
}