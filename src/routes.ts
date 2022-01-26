import { Request, Response, Router } from "express";
import {
    CreateMessageController,
    ListMessageController,
    CreateUserController,
    ListUsersController,
    GetUserController
} from "./controllers";

const router = Router();

const createUserController = new CreateUserController();
const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
const listUsersConstroller = new ListUsersController();
const getUserController = new GetUserController();

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Bem vindo a API Dio Shopping' })
})

router.get('/users', listUsersConstroller.handle)
router.get('/user/:uuid', getUserController.handle)
router.get('/message', listMessageController.handle)
router.post('/user/create', createUserController.handle)
router.post('/message', createMessageController.handle)

export { router };

