import { Fake_DB } from "../db/FakeDb.js"


class BurgersService {


    async getBurgers() {
        return Fake_DB.burgers
    }





}




export const burgersService = new BurgersService()