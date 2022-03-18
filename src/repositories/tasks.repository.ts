import { Tasks } from "../models/tasks.model";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Tasks)
export class TaskRepository extends Repository<Tasks> {

    async getTaskByTemplateId(templateId: string) {
        return await this.findOne({ where: templateId });
    }

    async getTaskByName(name: string) {
        return await this.findOne({ where: { name } });
    }

    async getTasksActive() {
        return await this.find({ where: { active: true } });
    }
}