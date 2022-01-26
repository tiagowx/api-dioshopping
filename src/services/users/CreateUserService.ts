import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repository/UsersRepository";

interface IUser {
    email: string;
    name: string;
    password: string
}


class CreateUserService {


    async execute({ name, email, password }: IUser) {
        const userRepository = getCustomRepository(UsersRepository);

        if (!name) {
            throw new Error("Por favor informe seu nome!")
        }

        if (!email) {
            throw new Error("Por favor informe um email!")
        }

        if (!password) {
            throw new Error("Por favor informe a senha!")
        }

        const newUser = userRepository.create({ name, email, password })

        await userRepository.save(newUser);

        return newUser;
    }
}

export { CreateUserService };
