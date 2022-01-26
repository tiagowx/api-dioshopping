import { Request, Response } from "express";
import { GetUserIdService } from "../../services/users/GetUserIdService";

class GetUserController {
    async handle(request: Request, response: Response){
        const getUserController = new GetUserIdService();

        const uuid = request.params.uuid;

        const user = await getUserController.execute(uuid);

        return response.json(user)
    }
}

export { GetUserController }