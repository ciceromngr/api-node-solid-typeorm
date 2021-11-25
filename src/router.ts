import { Router } from "express";
import { CreateUserController } from "./useCases/createUsers/CreateUserController";

const router = Router()

router.post('/users', new CreateUserController().handle)

export { router }

