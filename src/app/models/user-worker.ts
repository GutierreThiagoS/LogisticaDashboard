import { OrderWorker } from './order-worker'

export interface UserWorker {
    id: number,
    name: string,
    email: string,
    order: Array<OrderWorker>
    
}


//         "id": 1,
//         "name": "Thiago",
//         "email": "thiago@gmail.com",
//         "order": []
