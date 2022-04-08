import { UserWorker } from '../user-worker'

export interface ResponseWorkers {
    workers: Array<UserWorker>,
    status: boolean,
    info: string
}

// [
//     {
//         "id": 1,
//         "name": "Thiago",
//         "email": "thiago@gmail.com",
//         "order": [
//             {
//                 "id": 1,
//                 "date": "17/03/2022",
//                 "nf": "88994455",
//                 "user_id": 1,
//                 "timer_concluded": null,
//                 "items": [
//                     {
//                         "id": 1,
//                         "order_id": 1,
//                         "product_id": "1",
//                         "description_product": "ÁLCOOL GEL MATA GERME 70% 300ML",
//                         "street": "03",
//                         "module": "11",
//                         "height": "05",
//                         "position": "12",
//                         "quantity_lack": 3,
//                         "quantity_total": 3,
//                         "unity": "UN",
//                         "ean": "7896509976556",
//                         "color_tag": "verde",
//                         "code_tag": "051",
//                         "confirmTag": 0,
//                         "price": 10.33,
//                         "timer_start": "",
//                         "timer_end": null,
//                         "chronometer": null
//                     },
//                     
//             }
//         ]
//     }
// ]