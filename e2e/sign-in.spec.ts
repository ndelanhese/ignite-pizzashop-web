import { expect, test } from '@playwright/test';

test('It should be able to see the login form', async ({ page }) => {
  await page.goto('/sign-in');

  const defaultText = page.getByText('Acessar painel').first();
  await expect(defaultText).toBeVisible();

  const emailInput = page.getByPlaceholder('name@example.com');
  await expect(emailInput).toBeVisible();

  const submitButton = page.getByRole('button', { name: 'Acessar painel' });
  await expect(submitButton).toBeVisible();
});
