import { getRandomNumber } from "./random"

describe('random', () => {
    describe('getRandomNumber', () => {
        it('should return number', () => {
            const number = getRandomNumber()
            expect(number).toBe(9)
        })
    })
})
