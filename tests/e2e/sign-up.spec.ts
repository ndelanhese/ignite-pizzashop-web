import { expect, test } from '@playwright/test';

test('It should be able to sig-up', async ({ page }) => {
  await page.goto('/sign-up');

  const headerText = page.getByText('Criar conta grátis');
  await expect(headerText).toBeVisible();

  const restaurantInput = page.getByPlaceholder('Pizza do zé');
  await expect(restaurantInput).toBeVisible();
  await expect(restaurantInput).toBeFocused();

  const nameInput = page.getByPlaceholder('Zé da Silva');
  await expect(nameInput).toBeVisible();

  const emailInput = page.getByPlaceholder('name@example.com');
  await expect(emailInput).toBeVisible();

  const phoneInput = page.getByPlaceholder('(44) 9 1234-5678');
  await expect(phoneInput).toBeVisible();

  const submitButton = page.getByRole('button', { name: 'Finalizar cadastro' });
  await expect(submitButton).toBeVisible();

  const policyTerms = page.getByText(/Ao continuar/);
  await expect(policyTerms).toBeVisible();
});
