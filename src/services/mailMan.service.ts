import { MailManRepository } from "../repositories/mailman.repository";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { MailMan } from "../models/mailman.model";

@Service()
export class MailManService {

    private deliveries: MailMan[] = [];
    private jobs: any[];

    constructor(
        @InjectRepository() private mailManRepository: MailManRepository
    ) { }

    async getJobs() {
        this.jobs.length = 0;
        await this.getDeliveries();
        for await (const delivery of this.deliveries) {
            this.jobs.push(
                ... await this.mailManRepository.getJobtoExecuted(
                    delivery.documentIdContact,
                    delivery.nameTask
                )
            )
        }
    }

    private async getDeliveries() {
        this.deliveries.length = 0;
        const documents = await this.mailManRepository.getDeliveries();
        this.deliveries.push(...documents);
    }
}