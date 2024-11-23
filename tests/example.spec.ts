import { test, expect } from '@playwright/test'

test('has the Popular Products title', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const title = page.getByTestId('home-title')
  await expect(title).toHaveText('Popular Products')
})

test('has the products on the Home page', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const products = page.locator('[data-testid="product-item"]')
  await expect(products).toBeDefined()
})

test('has the Browse all products button', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const button = page.getByTestId('browse-button')
  await expect(button).toBeDefined()
})

test('when clicking on the Browse all products button it should redirect to the Shop page', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const button = page.getByTestId('browse-button')

  await button.waitFor({ state: 'visible' })
  await expect(button).toHaveText('Browse all products')

  await button.click()

  await page.waitForNavigation()
  await expect(page.url()).toBe('http://localhost:3000/products')
})

test('on the Shop page the Page title should be visible and have the Shop page text', async ({ page }) => {
  await page.goto('http://localhost:3000/products')

  const pageTitle = page.getByTestId('page-title')

  await expect(pageTitle).toBeVisible({ timeout: 10000 })
  await expect(pageTitle).toHaveText('Shop page', { timeout: 10000 })
})

test('on the Shop page products should be defined', async ({ page }) => {
  await page.goto('http://localhost:3000/products')

  const products = page.locator('[data-testid="product-item"]')

  const productCount = await products.count()
  for (let i = 0; i < productCount; i++) {
    await expect(products.nth(i)).toBeVisible({ timeout: 10000 })
  }
})
