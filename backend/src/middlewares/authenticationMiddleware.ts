import { Request } from "express";

export type AuthenticatedUserModel = {
    userId?: string
    authenticated: boolean
}

// This is obviously not great authentication here.. but in the real world we would most likely handle authentication outside this application and validate JWTs instead
export function expressAuthentication(request: Request, _securityName: string, _scopes?: string[]): Promise<AuthenticatedUserModel> {
    const userId = request.headers["digivisio-id"]

    return userId
        ? Promise.resolve({
            authenticated: true,
            userId: userId[0],
        })
        : Promise.reject(`Requests should include 'digivisio-id' header`)

}
