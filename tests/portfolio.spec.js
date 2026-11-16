import { test, expect } from "@playwright/test";

test("language, direct links, history, filters and images work", async ({
  page,
}) => {
  await page.goto("/#resume");
  await expect(page.locator("#resume")).toBeVisible();
  await expect(page.locator("#experience-list > li")).toHaveCount(4);
  await page.evaluate(() => window.scrollTo(0, 700));
  await expect(page.locator("#back-top")).toBeVisible();
  await page.locator("#back-top").click();
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
  await page.getByRole("button", { name: "TH", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "th");
  await expect(page.locator("#experience-list")).toContainText(
    "รวบรวมความต้องการ",
  );
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "th");
  await page.getByRole("button", { name: "EN", exact: true }).click();
  await page.locator('nav a[href="#portfolio"]').click();
  await expect(page).toHaveURL(/#portfolio$/);
  await page.getByRole("button", { name: "Learning", exact: true }).click();
  await expect(page.locator("[data-project]:visible")).toHaveCount(1);
  await page.goBack();
  await expect(page.locator("#resume")).toBeVisible();
  await page.locator('nav a[href="#about"]').click();
  await page.locator("#about img").first().waitFor();
  await expect
    .poll(() =>
      page
        .locator("#about img")
        .evaluateAll((images) =>
          images.every((image) => image.complete && image.naturalWidth > 0),
        ),
    )
    .toBe(true);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.locator('nav a[href="#resume"]').click();
  await expect(page.locator("#resume")).toBeVisible();
});

for (const width of [320, 390, 768, 1280]) {
  test(`no horizontal overflow at ${width}px in either language`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 850 });
    await page.goto("/");
    for (const language of ["TH", "EN"]) {
      await page.getByRole("button", { name: language, exact: true }).click();
      for (const id of ["about", "resume", "portfolio", "contact"]) {
        await page.goto(`/#${id}`);
        await expect(page.locator(`#${id}`)).toBeVisible();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        ).toBe(true);
      }
    }
    if (width === 390)
      await page.screenshot({
        path: "test-results/mobile.png",
        fullPage: true,
      });
  });
}
