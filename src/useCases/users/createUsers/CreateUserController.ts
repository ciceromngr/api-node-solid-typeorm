import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";


export class CreateUserController {

    async handle(req: Request, res: Response) {

        const createUserService = new CreateUserService()

        try {

            const { id, name, email } = await createUserService.excecute(req.body)

            return res.status(201).json(
                {
                    status: 'Created',
                    user: {
                        id,
                        name,
                        email
                    }
                })

        } catch (error) {
            return res.status(404).json(error.message)
        }
    }
}