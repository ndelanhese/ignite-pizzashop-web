import { expect, test } from '@playwright/test';

test('It should be able to see the text dashboard', async ({ page }) => {
  await page.goto('/dashboard');

  const defaultText = page.getByText('Dashboard!');
  await expect(defaultText).toBeVisible();
  await expect(defaultText).toHaveText('Dashboard!');
  await expect(defaultText).toContainText('Dashboard');
});
