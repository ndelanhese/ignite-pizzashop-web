import { expect, test } from '@playwright/test';

test.describe('Sign-in form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sign-in');
  });

  test('It should be not able to see the sign-in form', async ({ page }) => {
    const headerText = page.getByText('Acessar painel').first();
    await expect(headerText).toBeVisible();

    const subtitleText = page.getByText(
      'Acompanhe suas vendas pelo painel do parceiro',
    );
    await expect(subtitleText).toBeVisible();

    const emailInput = page.getByPlaceholder('name@example.com');
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toBeFocused();

    const submitButton = page.getByRole('button', { name: 'Acessar painel' });
    await expect(submitButton).toBeVisible();
  });

  test('It should be not able to signin without an e-mail', async ({
    page,
  }) => {
    const emailInput = page.getByPlaceholder('name@example.com');
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toBeFocused();

    const submitButton = page.getByRole('button', { name: 'Acessar painel' });
    await submitButton.click();

    const emptyErrorMessage = page.getByText('Informe o e-mail');
    await expect(emptyErrorMessage).toBeVisible();
  });

  test('It should be not able to signin with a wrong e-mail', async ({
    page,
  }) => {
    const emailInput = page.getByPlaceholder('name@example.com');
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toBeFocused();
    await emailInput.fill('name@example');

    const submitButton = page.getByRole('button', { name: 'Acessar painel' });
    await submitButton.click();

    const wrongEmailMessage = page.getByText('E-mail inválido');
    await expect(wrongEmailMessage).toBeVisible();
  });
});

test.describe('Sign-in form (Mobile)', () => {
  test.use({ viewport: { width: 639, height: 740 } });

  test('It should be not able to see only sign-in form', async ({ page }) => {
    await page.goto('/sign-in');

    const sidebarTitle = page.getByText('pizza.shop', { exact: true });
    await expect(sidebarTitle).toBeHidden();

    const headerText = page.getByText('Acessar painel').first();
    await expect(headerText).toBeVisible();

    const subtitleText = page.getByText(
      'Acompanhe suas vendas pelo painel do parceiro',
    );
    await expect(subtitleText).toBeVisible();

    const emailInput = page.getByPlaceholder('name@example.com');
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toBeFocused();

    const submitButton = page.getByRole('button', { name: 'Acessar painel' });
    await expect(submitButton).toBeVisible();
  });
});

test.describe('Sign-in form (Desktop)', () => {
  test.use({ viewport: { width: 640, height: 740 } });

  test('It should be able to see the sign-in form with sidebar', async ({
    page,
  }) => {
    await page.goto('/sign-in');

    const sidebarTitle = page.getByText('pizza.shop', { exact: true });
    await expect(sidebarTitle).toBeVisible();

    const headerText = page.getByText('Acessar painel').first();
    await expect(headerText).toBeVisible();

    const subtitleText = page.getByText(
      'Acompanhe suas vendas pelo painel do parceiro',
    );
    await expect(subtitleText).toBeVisible();

    const emailInput = page.getByPlaceholder('name@example.com');
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toBeFocused();

    const submitButton = page.getByRole('button', { name: 'Acessar painel' });
    await expect(submitButton).toBeVisible();
  });
});
