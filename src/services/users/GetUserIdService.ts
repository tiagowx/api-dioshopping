import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repository/UsersRepository";

class GetUserIdService{
    async execute(uuid: string){
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne(uuid);

        return user
    }
}

export { GetUserIdService }
