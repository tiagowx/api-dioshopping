import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { CreateUserController  } from "./controllers/CreateUsersController";
import { ListMessageController } from "./controllers/ListMessageController";
import { ListUsersController } from "./controllers/ListUsersConstroller";

const router = Router();

const createUserController = new CreateUserController();
const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
const listUsersConstroller  = new ListUsersController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API Dio Shopping'})
})

router.get('/users', listUsersConstroller.handle)
router.get('/message', listMessageController.handle)
router.post('/user/create', createUserController.handle)
router.post('/message', createMessageController.handle)

export { router }
