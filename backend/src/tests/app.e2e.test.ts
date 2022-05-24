import puppeteer from 'puppeteer'

jest.setTimeout(30000)
const frontendHost = 'https://frontend' // note that this refers to the name (host) defined in compose.yml

describe('app e2e test', () => {
    it('should type text in search, submit, and show at least one result', async () => {
        const browser = await puppeteer.launch({
            ignoreHTTPSErrors: true,
            headless: true,
            args: [
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--disable-setuid-sandbox',
                '--no-sandbox', // not a great idea in a real project without time constraints...
            ],
        })

        const page = await browser.newPage()

        await page.goto(frontendHost)
        await page.waitForSelector('#search-bar')
        const text = await page.$eval('#search-bar', (e) => e.ariaLabel)

        expect(text).toContain('Hakukenttä koko aineistolle')

        await page.focus('#search-bar')
        await page.type('#search-bar', 'luomu')
        await page.keyboard.press('Enter')

        await page.waitForSelector('.ResultCard_link__lQehe') // wait for at least one result card with a link to show up, we dont care how many or what the content is because this could change in the aoe api
        const linktext = await page.$eval('.ResultCard_link__lQehe', (e) => e.textContent)

        expect(linktext).toBeTruthy()

        await browser.close()
    })
})
