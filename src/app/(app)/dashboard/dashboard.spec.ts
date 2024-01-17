import test, { expect } from "@playwright/test";

test.describe("Dashboard", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/dashboard");
	});

	test("it should be able to see the dashboard", async ({ page }) => {
		const homeLink = page.getByText("Início");
		await expect(homeLink).toBeVisible();
	});
});
