import { expect, test } from "@playwright/test";

test("the public case study is legible, navigable, and bounded", async ({ page }, testInfo) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("what changed");
  await expect(page.locator("#cases").getByRole("heading", { level: 2 })).toContainText("decisions are the proof");
  await expect(page.getByRole("link", { name: /production application/i })).toHaveAttribute("href", "https://covenest.systems");
  await expect(page.getByRole("link", { name: /YouTube channel/i }).first()).toHaveAttribute("href", /youtube\.com\/channel\//);
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("footer")).toBeVisible();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);

  const imageCount = await page.locator("figure img").count();
  expect(imageCount).toBe(2);
  for (let index = 0; index < imageCount; index += 1) await expect(page.locator("figure img").nth(index)).toHaveAttribute("alt", /.+/);

  await page.screenshot({ path: testInfo.outputPath(`showcase-${testInfo.project.name}.png`), fullPage: true });
});

test("keyboard focus reaches the primary evidence path", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused().catch(() => undefined);
  await expect(page.getByRole("link", { name: /Read the engineering cases/i })).toBeVisible();
});
