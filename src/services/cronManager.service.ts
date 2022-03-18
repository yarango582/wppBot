import { Service } from "typedi";
import { CronJobManager } from "../utils/CronJobManager.util";


@Service()
export class CronManagerService {

    private cronJobManager;

    constructor() {
        this.cronJobManager = CronJobManager.getInstance();
    }

    async getCronJobs(): Promise<string> {
        return this.cronJobManager.listCrons();
    }

    async isExistingJob(key: string): Promise<boolean> {
        return this.cronJobManager.exists(key);
    }

    async deleteJob(key: string): Promise<void> {
        return this.cronJobManager.deleteJob(key);
    }

    async deleteAllJobs(): Promise<void> {
        return this.cronJobManager.deleteAll();
    }

    async stopJob(key: string): Promise<string | true> {
        return this.cronJobManager.stop(key);
    }

    async stopAllJobs(): Promise<boolean> {
        return this.cronJobManager.stopAll();
    }

    async addingJob(
        key: string,
        cronExpression: string,
        _function: () => void
    ): Promise<void> {
        return this.cronJobManager.add(key, cronExpression, _function, { start: true });
    }

    async startJob(key: string): Promise<string | boolean> {
        return this.cronJobManager.start(key);
    }

} 