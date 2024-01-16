import { expect, test } from '@playwright/test';

test('It should be able to signin', async ({ page }) => {
  await page.goto('/sign-in');

  const headerText = page.getByText('Acessar painel').first();
  await expect(headerText).toBeVisible();

  const emailInput = page.getByPlaceholder('name@example.com');
  await expect(emailInput).toBeVisible();
  await expect(emailInput).toBeFocused();

  const submitButton = page.getByRole('button', { name: 'Acessar painel' });
  await expect(submitButton).toBeVisible();
});
