import { UsersWorkersStatistics } from '../users-workers-statistics'

export interface ResponseWorkersStatistics {
    users: Array<UsersWorkersStatistics>,
    status: boolean,
    info: string
}
