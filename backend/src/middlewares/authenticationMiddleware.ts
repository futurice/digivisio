import { Request } from "express";

export type AuthenticatedUserModel = {
    userId?: string
    authenticated: boolean
}

// This is obviously not great authentication here.. but in the real world we would most likely handle authentication outside this application and validate JWTs instead
export const expressAuthentication = async (request: Request, _securityName: string, _scopes?: string[]): Promise<AuthenticatedUserModel> => {
    const userId = request.headers["digivisio-id"]

    return userId && typeof userId === 'string'
        ? Promise.resolve({
            authenticated: true,
            userId: userId,
        })
        : Promise.reject(new Error(`Requests should include 'digivisio-id' header`))    // todo fix this.. use proper response with json and status code 401
}
