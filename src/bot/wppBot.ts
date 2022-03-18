import fs from "fs";
import { PATH_SESSION_FILE } from "../constants/index";
import { Client, ClientSession, LegacySessionAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";


export class WppBot {
    private intance: Client;
    init() {
        return (fs.existsSync(PATH_SESSION_FILE)) ? this.withSession() : this.withOutSession();
    }

    withSession() {
        const sessionData = require(PATH_SESSION_FILE);
        const client = new Client({
            session: sessionData
        });
        client.on('ready', () => {
            console.log("Sesion restaurada correctamente");
            this.intance = client;
        });

        client.on('auth_failure', (msg) => {
            console.error('Error al restaurar la sesion: ' + msg);
        });
        client.initialize();
        return this.intance;
    }

    withOutSession() {
        console.log("No hay una sesion guardada!");
        const client = new Client({
            authStrategy: new LegacySessionAuth()
        });
        client.on('qr', (qr) => {
            qrcode.generate(qr, { small: true });
        });
        client.on('authenticated', (session: ClientSession) => {
            const sessionData = session;
            this.intance = client;
            fs.writeFile(PATH_SESSION_FILE, JSON.stringify(sessionData), (err) => {
                if (err) console.error('No fue posible almacenar la sesion');
            });
        });
        client.initialize();
        return this.intance;
    }

}
