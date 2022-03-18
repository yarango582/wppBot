import Manager from "../crontabManager/crontab_manager";
import { ICronJobManagerOptions } from "../interfaces/ICronJobManager";
import {
    PrincipalCronName,
    SchedulingMain
} from "../constants/cronManager/cronScheduling.constant";

export class CronJobManager {

    private cronManager: Manager;

    static getInstance(): Manager {
        let instance = null;
        if (!instance) {
            instance = new Manager(
                PrincipalCronName,
                SchedulingMain,
                () => { console.log('CronJob Principal iniciado!') },
                { start: true }
            )
            return instance;
        }
        return instance;
    }

    start(key: string) {
        return this.cronManager.start(key);
    }

    addingJob(
        key: string,
        cronExpression: string,
        _function: () => void,
        config: ICronJobManagerOptions
    ): void {
        this.cronManager.add(key, cronExpression, _function, { start: config.start || true });
    }

    stopJob(key: string): string | true {
        return this.cronManager.stop(key);
    }

    stopAll(): boolean {
        return this.cronManager.stopAll();
    }

    deleteJob(key: string): any {
        return this.cronManager.deleteJob(key);
    }

    deleteAll(): void {
        return this.cronManager.deleteAll();
    }

    listCrons(): string {
        return this.cronManager.listCrons();
    }

    isExistingJob(key: string): boolean {
        return this.cronManager.exists(key)
    }

}