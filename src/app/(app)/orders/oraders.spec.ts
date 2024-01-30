import test, { expect } from "@playwright/test";

test.describe.skip("Orders", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/orders");
	});

	test("it should be able to see the orders", async ({ page }) => {
		const homeLink = page.getByText("Início");
		await expect(homeLink).toBeVisible();
	});
});
