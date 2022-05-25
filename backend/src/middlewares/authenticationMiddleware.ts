import { Request } from 'express'
import jwt from 'jsonwebtoken'
import { getRequiredEnvVariable } from '../utils'

export class NotAuthenticatedError extends Error { }

export type AuthenticatedUserModel = {
    userId: string
    authenticated: boolean
}

/**
 * Authentication middleware used by tsoa to verify jwt tokens
 * Tokens are expected to use the authorization header with Bearer scheme
 * @param request
 * @param _securityName
 * @param _scopes
 * @returns
 */
export const expressAuthentication = async (request: Request, _securityName: string, _scopes?: string[]): Promise<AuthenticatedUserModel> => {
    // in production we would like to use either an asymmetric public key, or some external service
    const signingKey = getRequiredEnvVariable('JWT_SIGNING_KEY')
    const validAudience = getRequiredEnvVariable('JWT_VALID_AUDIENCE')
    const validIssuer = getRequiredEnvVariable('JWT_VALID_ISSUER')

    if (request.headers.authorization?.startsWith('Bearer ')) {
        try {
            const decodedToken = jwt.verify(request.headers.authorization.substring(7), signingKey, { audience: validAudience, issuer: validIssuer })

            if (decodedToken && typeof decodedToken !== 'string' && decodedToken.sub) {
                return {
                    authenticated: true,
                    userId: decodedToken.sub,
                }
            }
        } catch (err: unknown) {
            throw new NotAuthenticatedError('Invalid JWT')
        }
    }

    throw new NotAuthenticatedError('Requests should include Authorization header with JWT')
}
