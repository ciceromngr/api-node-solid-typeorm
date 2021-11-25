import { ICreateUserRequestDAO } from "./DAO/CreateUsersDAO";
import * as yup from 'yup'
import { Users } from "../../../database/entities/Users";
import { CreateUsersRepository } from "../../../repositories/implementations/CreateUsersRepository";
import { getCustomRepository } from "typeorm";

export class CreateUserService {

    constructor() { }

    async excecute(data: ICreateUserRequestDAO): Promise<Users> {

        const userRepository = getCustomRepository(CreateUsersRepository)

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().required(),
            password: yup.string().required(),
        })

        if (!(await schema.isValid(data))) throw new Error("Credentials invalid.")

        const userAlreadyExist = await userRepository.findOneUser({ email: data.email })

        if (userAlreadyExist) throw new Error('User Already Exist.')

        const user = await userRepository.created(data)

        await userRepository.saved(user)

        return user

    }

}