import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";
import md5 from "crypto-js/md5"

class CreateUserController{
    async handle(request: Request, response: Response){
        const user = request.body;

        const encodePass = md5(user.password);

        user.password = encodePass.toString();

        const {name, email, password} = user;

        const createUserService = new CreateUserService();

        const newUser = await createUserService.execute({ name, email, password});

        return response.json(newUser);
    }
}

export { CreateUserController }