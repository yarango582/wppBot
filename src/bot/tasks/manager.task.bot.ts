import { Client } from "whatsapp-web.js";
import { WppBot } from "../wppBot";
import { IJobs } from "../../interfaces/IJobs.interface";
import Container, { Service } from "typedi";
import {
    TYPES
} from "../../constants/typedi/typediDependencies.constan";

@Service()
export class ManagerTasksBot {

    private client: Client;

    constructor() {
        this.client = Container.get(TYPES.WppBot);
    }

    async sendMessage(jobs: IJobs[]) {
        jobs.forEach((job) => {
            this.client.sendMessage(
                `${job.contact.indicative}${job.contact.number}@c.us`,
                `${job.task.name}: ${job.task.message}`
            ).catch((err) => err);
        });
    }
}