import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.geracaocaldeira.org/');
});

test('should load the geracao caldeira page', async ({ page }) => {
    const title = await page.title();
    expect((title)?.match('Geração Caldeira')?.[0]).toBe('Geração Caldeira');
}); 