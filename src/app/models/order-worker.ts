import { ItemsOrder } from './items-order';

export interface OrderWorker {
    id: number,
    date: string,
    nf: string
    user_id: number,
    timer_concluded: undefined,
    items: Array<ItemsOrder>
}

//                 "id": 1,
//                 "date": "17/03/2022",
//                 "nf": "88994455",
//                 "user_id": 1,
//                 "timer_concluded": null,
//                 "items": [
//                     {
