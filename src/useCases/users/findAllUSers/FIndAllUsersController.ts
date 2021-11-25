import { Request, Response } from "express";
import { FindAllUsersService } from "./FIndAllUsersService";

export class FindAllUsersController {

    async findAllUsers(req: Request, res: Response) {
        const findAllUsersService = new FindAllUsersService()

        const users = await findAllUsersService.findAllUsers()

        return res.status(200).json(users)
    }

}