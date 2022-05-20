import * as express from 'express';
import { AuthenticatedUserModel } from './authenticationMiddleware';

export type AuthenticatedRequestModel = express.Request & {
    user: AuthenticatedUserModel
}
