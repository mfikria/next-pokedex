import { test, expect } from '@playwright/test'

test('User see the badges and pokemon stats', async ({ page }) => {
  await page.goto('/pokemon/bulbasaur')

  expect(await page.locator('[data-testid="pokemon-detail-image-bulbasaur"]')).toBeTruthy()
  expect(await page.locator('[data-testid="pokemon-type-grass"]')).toBeTruthy()
  expect(await page.locator('[data-testid="pokemon-type-poison"]')).toBeTruthy()
  expect(await page.locator('[data-testid="pokemon-detail-table-bulbasaur"]')).toBeTruthy()
})

test('User navigate to invalid pokemon detail page', async ({ page }) => {
  await page.goto('/pokemon/invalid-pokemon')

  expect(await page.locator('[data-testid="error-handle-404"]')).toBeTruthy()
})