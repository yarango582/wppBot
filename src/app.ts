import "reflect-metadata";
import express from "express";
import { createExpressServer } from "routing-controllers";
import { resolve } from "path";

const app: express.Application = createExpressServer({
    defaultErrorHandler: false,
    routePrefix: "/api/v1",
    classTransformer: true,
    validation: {
        validationError: {
            target: false,
        },
    },
    cors: true,
    controllers: [resolve(__dirname, "./controllers/**/*{.ts,.js}")], // we specify controllers we want to use
    middlewares: [resolve(__dirname, "./middlewares/**/*{.ts,.js}")],
})

export default app;