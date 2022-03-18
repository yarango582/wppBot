import { useContainer as routeContainer } from "routing-controllers";
import { Container } from "typedi";
import { useContainer as typeOrmContainer } from "typeorm";
import { WppBot } from "./bot/wppBot";

routeContainer(Container);
typeOrmContainer(Container);

Container.set("WppBot", new WppBot().init());