
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserFakeDB } from './user';
import { MessageFakeDB } from './message';

export class FakeDbService  implements InMemoryDbService  {
    createDb()
    {
       return {
           // Users
           'users':UserFakeDB.users,

           // Messages
           'messages':MessageFakeDB.messages,
       }

    }
}