import { expressAuthentication } from "./authenticationMiddleware";
import { Request } from "express";
import { IncomingHttpHeaders } from "http";

const mockValidJwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha3NlbGkiLCJuYW1lIjoiQWtzZWxpIiwiaWF0IjoxNjUzMDI4MzA4LCJleHAiOjE4NTMwMzE5MDgsImF1ZCI6ImRpZ2l2aXNpbyIsImlzcyI6ImRpZ2l2aXNpb2FwcCJ9.6TKQnmiIs2JdmZcgW-steaTTmIlh2aPycYGTK1z3pNY';
const mockInvalidJwt = 'eyNope';

describe('expressAuthentication', () => {
    describe('authenticated user', () => {
        it('should return user', async () => {
            const request = {
                headers: {
                    authorization: `Bearer ${mockValidJwt}`,
                } as IncomingHttpHeaders
            } as Request

            const result = await expressAuthentication(request, 'somename')
            expect(result.authenticated).toBeTruthy();
            expect(result.userId).toEqual('akseli')
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

    describe('invalid JWT', () => {
        it('should reject', async () => {
            const request = {
                headers: {
                    authorization: `Bearer ${mockInvalidJwt}`,
                } as IncomingHttpHeaders
            } as Request

            await expect(expressAuthentication(request, 'somename')).rejects.toThrowError()
        })
    })
})
