import { MailManService } from "./mailMan.service";
import { CronManagerService } from "./cronManager.service";
import { WppBot } from "../bot/wppBot";
import { Service } from "typedi";
import { Client } from "whatsapp-web.js";


@Service()
export class JobsManagerService {

    private wppBot: WppBot;
    private clientWpp: Client;

    constructor(
        private readonly mailManService: MailManService,
        private readonly cronManagerService: CronManagerService
    ) {
        this.wppBot = new WppBot();
        this.clientWpp = this.wppBot.init();
    }

    main() {
        console.log('estamos funcionando correctamente!');
    }
}