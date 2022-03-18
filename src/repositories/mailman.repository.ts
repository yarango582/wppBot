import { MailMan } from "../models/mailman.model";
import { EntityRepository, Repository, getCustomRepository } from "typeorm";
import { ContactsRepository } from "./contacts.repository";
import { TaskRepository } from "./tasks.repository";

@EntityRepository(MailMan)
export class MailManRepository extends Repository<MailMan> {
    private contact: ContactsRepository;
    private tasks: TaskRepository;
    private jobs: any[] = [];

    async getDeliveries() {
        return await this.find({ where: { active: true } });
    }

    async getJobtoExecuted(documentIdContact: string, nameTask: string) {
        this.jobs.length = 0;
        const contact = await this.getContact(documentIdContact);
        const task = await this.getTask(nameTask);
        this.jobs.push({
            contact,
            task
        })
        return this.jobs;
    }

    async getContact(documentId: string) {
        this.contact = getCustomRepository(ContactsRepository);
        return await this.contact.getContactByDocumentId(documentId);
    }
    async getTask(name: string) {
        this.tasks = getCustomRepository(TaskRepository);
        return await this.tasks.getTaskByName(name)
    }
}