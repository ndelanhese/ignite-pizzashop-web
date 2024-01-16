import { expect, test } from '@playwright/test';

test.describe('Sign-up form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sign-up');
  });

  test('It should be able to see the sig-up form', async ({ page }) => {
    const loginButton = page.getByText('Fazer login');
    await expect(loginButton).toBeVisible();

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

    const submitButton = page.getByRole('button', {
      name: 'Finalizar cadastro',
    });
    await expect(submitButton).toBeVisible();

    const policyTerms = page.getByText(/Ao continuar/);
    await expect(policyTerms).toBeVisible();
  });

  test('It should be able to sign-up with correct form data', async ({
    page,
  }) => {
    const restaurantInput = page.getByPlaceholder('Pizza do zé');
    await restaurantInput.fill('Pizza do zé');

    const nameInput = page.getByPlaceholder('Zé da Silva');
    await nameInput.fill('Zé da Silva');

    const emailInput = page.getByPlaceholder('name@example.com');
    await emailInput.fill('name@example.com');

    const phoneInput = page.getByPlaceholder('(44) 9 1234-5678');
    await phoneInput.fill('(44) 9 1234-5678');

    const submitButton = page.getByRole('button', {
      name: 'Finalizar cadastro',
    });
    await expect(submitButton).toBeVisible();
    await submitButton.click();

    const successToast = page.getByText('Restaurante cadastrado com sucesso!');
    await expect(successToast).toBeVisible();
  });

  test('It should be not able to sign-up without a correct form data', async ({
    page,
  }) => {
    const submitButton = page.getByRole('button', {
      name: 'Finalizar cadastro',
    });
    await submitButton.click();

    const emptyRestaurantMessage = page.getByText(
      'Informe o nome do restaurante',
    );
    await expect(emptyRestaurantMessage).toBeVisible();

    const emptyNameMessage = page.getByText('Informe o seu nome');
    await expect(emptyNameMessage).toBeVisible();

    const emptyEmailMessage = page.getByText('Informe o e-mail');
    await expect(emptyEmailMessage).toBeVisible();

    const emptyPhoneMessage = page.getByText('Informe o seu celular');
    await expect(emptyPhoneMessage).toBeVisible();
  });
});

test.describe('Sign-up form (Mobile)', () => {
  test.use({ viewport: { width: 639, height: 740 } });

  test('It should be able to see only sign-up form without sidebar', async ({
    page,
  }) => {
    await page.goto('/sign-up');

    const sidebarTitle = page.getByText('pizza.shop', { exact: true });
    await expect(sidebarTitle).toBeHidden();

    const loginButton = page.getByText('Fazer login');
    await expect(loginButton).toBeVisible();

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

    const submitButton = page.getByRole('button', {
      name: 'Finalizar cadastro',
    });
    await expect(submitButton).toBeVisible();

    const policyTerms = page.getByText(/Ao continuar/);
    await expect(policyTerms).toBeVisible();
  });
});

test.describe('Sign-up form (Desktop)', () => {
  test.use({ viewport: { width: 640, height: 740 } });

  test('It should be able to see the sign-up form with sidebar', async ({
    page,
  }) => {
    await page.goto('/sign-up');

    const sidebarTitle = page.getByText('pizza.shop', { exact: true });
    await expect(sidebarTitle).toBeVisible();

    const loginButton = page.getByText('Fazer login');
    await expect(loginButton).toBeVisible();

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

    const submitButton = page.getByRole('button', {
      name: 'Finalizar cadastro',
    });
    await expect(submitButton).toBeVisible();

    const policyTerms = page.getByText(/Ao continuar/);
    await expect(policyTerms).toBeVisible();
  });
});
