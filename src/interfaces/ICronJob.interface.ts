import { ObjectID } from "typeorm";

export interface ICronJob {
    executeCronjob(cronExpression: string, Callback: (...args: any[]) => Promise<boolean | null>): void;
    start(): void;
    stop(): void;
    status(): string;
    isActive(): boolean;
}

export interface ICronTaskManager {
  id: ObjectID;
  name: string;
  templateId: string;
  scheduling: string;
  task: ICronJob;
}
