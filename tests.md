## Testes

### Teste: should load the geracao caldeira page

Este teste verifica se a página 'https://www.geracaocaldeira.org/' é carregada corretamente e se o título da página contém a string 'Geração Caldeira'. 

```ts
test('should load the geracao caldeira page', async ({ page }) => {
    const title = await page.title();
    expect((title)?.match('Geração Caldeira')?.[0]).toBe('Geração Caldeira');
});
