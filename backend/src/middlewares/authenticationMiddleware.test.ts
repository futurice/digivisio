import { DIGIVISIO_ID_HEADER_NAME, expressAuthentication } from "./authenticationMiddleware";
import { Request } from "express";
import { IncomingHttpHeaders } from "http";

const mockUserId = 'someuserid';

describe('expressAuthentication', () => {
    describe('authenticated user', () => {
        it('should return user', async () => {
            const request = {
                headers: {
                    [DIGIVISIO_ID_HEADER_NAME]: mockUserId,
                } as IncomingHttpHeaders
            } as Request

            const result = await expressAuthentication(request, 'somename')
            expect(result.authenticated).toBeTruthy();
            expect(result.userId).toEqual(mockUserId)
        })
    })

    describe('unauthenticated user', () => {
        it('should reject', async () => {
            const request = {
                headers: {
                } as IncomingHttpHeaders
            } as Request

            await expect(expressAuthentication(request, 'somename')).rejects.toThrowError()
        })
    })
})
