import { test, expect } from '@playwright/test'

test('User navigate to pokomen list page and can see the pokemon cards', async ({ page }) => {
  await page.goto('/')

  expect(await page.getByTestId('site-logo')).toBeTruthy()
  await page.waitForSelector('[data-testid^="pokemon-card-shimmer"]', { state: 'hidden' })
  const pokemonCards = await page.locator('[data-testid^="pokemon-card-"]')
  const pokemonCardsCount = await pokemonCards.count()
  expect(pokemonCardsCount).toBe(9)
})

test('User can scroll to the end of the page and see the next pokemon cards', async ({ page }) => {
  await page.goto('/')

  await page.waitForSelector('[data-testid^="pokemon-card-shimmer"]', { state: 'hidden' })
  const pokemonCards = await page.locator('[data-testid^="pokemon-card-"]')
  const pokemonCardsCount = await pokemonCards.count()
  expect(pokemonCardsCount).toBe(9)

  page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })

  await expect.poll(() => page.locator('[data-testid^="pokemon-card-"]').count()).toBeGreaterThan(9)
  const nextPokemonCards = await page.locator('[data-testid^="pokemon-card-"]')
  const nextPokemonCardsCount = await nextPokemonCards.count()
  expect(nextPokemonCardsCount).toBe(18)
})

test('User can see the pokemon details page', async ({ page }) => {
  await page.goto('/')

  await page.waitForSelector('[data-testid^="pokemon-card-shimmer"]', { state: 'hidden' })
  const pokemonCards = await page.locator('[data-testid^="pokemon-card-"]')
  await pokemonCards.first().click()
  await expect(page).toHaveURL('/pokemon/bulbasaur')
  expect(await page.locator('[data-testid="pokemon-detail-bulbasaur"]')).toBeTruthy()
})