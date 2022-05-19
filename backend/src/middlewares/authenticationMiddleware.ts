import { Request } from "express";

export class NotAuthenticatedError extends Error { }

export type AuthenticatedUserModel = {
    userId?: string
    authenticated: boolean
}

export const DIGIVISIO_ID_HEADER_NAME = 'digivisio-id'

// This is obviously not great authentication here.. but in the real world we would most likely handle authentication outside this application and validate JWTs instead
export const expressAuthentication = async (request: Request, _securityName: string, _scopes?: string[]): Promise<AuthenticatedUserModel> => {
    const userId = request.headers[DIGIVISIO_ID_HEADER_NAME]
    console.debug(`UserId: ${userId}`);

    return userId && typeof userId === 'string'
        ? Promise.resolve({
            authenticated: true,
            userId: userId,
        })
        : Promise.reject(new NotAuthenticatedError(`Requests should include 'digivisio-id' header`))    // todo fix this.. use proper response with json and status code 401
}
