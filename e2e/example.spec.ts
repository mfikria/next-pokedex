import { test, expect } from '@playwright/test'

test('should navigate to the page', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveURL('/')
})