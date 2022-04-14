import { Worker } from "../worker";

export interface ResponseAllWorker {
    users: Array<Worker>,
    status: boolean,
    info: string
}
