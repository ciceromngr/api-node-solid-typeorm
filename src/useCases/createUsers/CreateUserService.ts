import { ICreateUserRequestDAO } from "./DAO/CreateUsersDAO";
import { ICreateUsersRepository } from '../../repositories/ICreateUsersRepository'

import * as yup from 'yup'
import { Users } from "../../database/entities/Users";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { getCustomRepository } from "typeorm";

export class CreateUserService {

    constructor() { }

    async excecute(data: ICreateUserRequestDAO): Promise<Users> {

        const userRepository = getCustomRepository(UsersRepository)

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

        delete user.password

        return user

    }

}