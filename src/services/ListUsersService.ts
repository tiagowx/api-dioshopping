import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repository/UsersRepository";

class ListUsersService{
    async execute(){
        const usersRepository = getCustomRepository(UsersRepository);

        const allUsers = await usersRepository.find();

        return allUsers
    }
}

export { ListUsersService }
