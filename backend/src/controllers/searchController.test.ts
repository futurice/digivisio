import { SearchController } from "./searchController";

describe('searchController', () => {
    describe('getRandom', () => {
        it('should return number', async () => {
            const controller = new SearchController();
            const response = await controller.getRandom()
            expect(response.randomNumber).toBe(9)
        })
    })
})
