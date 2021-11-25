import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";


export class CreateUserController {
    
    async handle(req: Request, res: Response) {

        const createUserService = new CreateUserService()

        const { name, email, password } = req.body

        try {

            const user = await createUserService.excecute({ 
                name, 
                email, 
                password 
            })

            return res.status(201).json({ status: 'Created', user: user})

        } catch (error) {
            return res.status(404).json(error.message)
        }
    }
}