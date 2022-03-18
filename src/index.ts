import "./injector";
import Server from "./server/server";
import { JobsManagerService } from "./services/jobsManager.service";
import { Container } from "typedi";

export const server = new Server((process.env.PORT as unknown) as number || 3000);

server.start(async () => {
    console.log(`server loaded at port: ${process.env.PORT || 3000}`);
    const jobsManagerService = Container.get(JobsManagerService);
    jobsManagerService.main();
});

