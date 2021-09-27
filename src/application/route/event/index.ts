import { Handler } from 'express';
import { EventController } from '../../controller/EventController';
import { isAuthenticated } from '../../../middleware/authentication';

const eventController = new EventController();

//Add more middleware handlers in the array
const get: Handler[] = [eventController.getEvents, isAuthenticated];

export { get as GET_EVENT };
