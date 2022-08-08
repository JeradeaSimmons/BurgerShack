import { Fake_DB } from "../db/FakeDb.js"


class BurgersService {


    async getBurgers() {
        return Fake_DB.burgers
    }

    async createBurger(burgerData) {
        burgerData.id = Fake_DB.burgers.length
        Fake_DB.burgers.push(burgerData)
        return burgerData
    }





}




export const burgersService = new BurgersService()