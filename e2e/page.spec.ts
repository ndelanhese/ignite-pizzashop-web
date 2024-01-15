import { env } from '@env'
import { test, expect } from '@playwright/test'

test('It should be able to see the text hello world', async ({ page }) => {
  await page.goto('/')

  const defaultText = page.getByText('Hello world!')
  await expect(defaultText).toBeVisible()
  await expect(defaultText).toHaveText('Hello world!')
  await expect(defaultText).toContainText('Hello')
  await expect(defaultText).toHaveText(/!/)
})
