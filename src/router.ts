import { Router } from "express";
import { CreateUserController } from "./useCases/users/createUsers/CreateUserController";
import { FindAllUsersController } from "./useCases/users/findAllUSers/FIndAllUsersController";

const router = Router()

router.post('/users', new CreateUserController().handle)
router.get('/users', new FindAllUsersController().findAllUsers)

export { router }

