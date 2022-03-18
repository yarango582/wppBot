import { Response } from "express";
import { Get, Res, Req, Param, JsonController, Post, Body } from "routing-controllers";
import { HttpCodes } from "../enums/httpCodes.enum";
import { HttpResponseInterpreter } from "../classes/HttpInterpreter.class";
import { CronManagerService } from "../services/cronManager.service";
import { Service } from "typedi";
import { CronJobManagerValidator } from "../validators/cronJobManager/CronJobManager.validator";

@JsonController("/cronjobs")
@Service()
export class CronJobsController {

    constructor(
        private readonly cronManagerService: CronManagerService
    ) { }

    @Get("/")
    async getCronjobs(
        @Res() res: Response
    ) {
        return this.cronManagerService.getCronJobs()
            .then((jobs) => HttpResponseInterpreter.succes({ jobs }, res))
            .catch((err) => new HttpResponseInterpreter(HttpCodes.INTERNAL_SERVER_ERROR, err));
    }

    @Post("/stop")
    async stopCronJob(
        @Res() res: Response,
        @Body() body: CronJobManagerValidator
    ) {
        const { key } = body;
        return this.cronManagerService.stopJob(key)
            .then((response) => HttpResponseInterpreter.succes({ response }, res))
            .catch((err) => new HttpResponseInterpreter(HttpCodes.INTERNAL_SERVER_ERROR, err));
    }

    @Post("/start")
    async startCronJob(
        @Res() res: Response,
        @Body() body: CronJobManagerValidator
    ) {
        const { key } = body;
        return this.cronManagerService.startJob(key)
            .then((response) => HttpResponseInterpreter.succes({ response }, res))
            .catch((err) => new HttpResponseInterpreter(HttpCodes.INTERNAL_SERVER_ERROR, err));
    }

    @Get("/stopAll")
    async stopAllCronJobs(
        @Res() res: Response
    ) {
        return this.cronManagerService.stopAllJobs()
            .then((response) => HttpResponseInterpreter.succes({ response }, res))
            .catch((err) => new HttpResponseInterpreter(HttpCodes.INTERNAL_SERVER_ERROR, err));
    }

}
