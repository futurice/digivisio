// src/users/usersController.ts
import { Controller, Get, Route, } from "tsoa";
import { getRandomNumber, RandomResult } from "../stuff/random";

@Route("search")
export class UsersController extends Controller {
    @Get()
    public async getRandom(): Promise<RandomResult> {
        return getRandomNumber();
    }
}
