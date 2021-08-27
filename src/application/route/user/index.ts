import { Handler } from 'express';
import { UserController } from '../../controller/UserController';

const userController = new UserController();

//Add more middleware handlers in the array
const get: Handler[] = [userController.getUsers];

export { get as GET_USER };