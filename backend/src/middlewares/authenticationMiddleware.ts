import { Request } from "express";
import jwt from 'jsonwebtoken';

export class NotAuthenticatedError extends Error { }

export type AuthenticatedUserModel = {
    userId?: string
    authenticated: boolean
}

export const expressAuthentication = async (request: Request, _securityName: string, _scopes?: string[]): Promise<AuthenticatedUserModel> => {

    // todo get these from env
    const cert = 'getcertfromenv';
    const validAudience = 'someaudience';
    const validIssuer = 'someissuer';

    if (request.headers.authorization?.startsWith('Bearer ')) {
        jwt.verify(request.headers.authorization.substring(7), cert, { audience: validAudience, issuer: validIssuer }, (err, decodedToken) => {
            if (err !== null) {
                console.error(err);
                throw new NotAuthenticatedError(`Invalid JWT`);
            }

            // todo pick some relevant claims from decoded token and populate user model
            if (decodedToken && typeof decodedToken !== "string") {
                return {
                    authenticated: true,
                    userId: decodedToken.sub,
                }
            }

            // if we get here something is seriously wrong with the token
        });
    }

    throw new NotAuthenticatedError(`Requests should include Authorization header with JWT`)
}
