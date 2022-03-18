import { MailManService } from "./mailMan.service";
import { CronManagerService } from "./cronManager.service";
import { Service } from "typedi";
import { ManagerTasksBot } from "../bot/tasks/manager.task.bot";

import {
    GetJobsCronName,
    SchedulingGetJobs
} from "../constants/cronManager/cronScheduling.constant";
import { IJobs } from "../interfaces/IJobs.interface";

@Service()
export class JobsManagerService {

    private jobs: IJobs[] = [];

    constructor(
        private readonly mailManService: MailManService,
        private readonly cronManagerService: CronManagerService,
        private readonly managerTasksBot: ManagerTasksBot
    ) { }

    async main() {
        this.addingJobUpdateJobsToExecute()
            .catch((err) => console.error(err));
    }

    async addingJobUpdateJobsToExecute() {
        this.cronManagerService.addingJob(
            GetJobsCronName,
            SchedulingGetJobs,
            async () => {
                const jobs: IJobs[] = await this.getJobs();
                this.jobs.length = 0;
                this.jobs.push(...jobs);
                if (this.jobs.length > 0) {
                    this.managerTasksBot.sendMessage(this.jobs)
                        .catch((err) => err);
                }
            },
        )
    }

    async getJobs(): Promise<IJobs[]> {
        return await this.mailManService.getJobs();
    }

}