## Testes end-to-end automatizados com Playwright

Este projeto a pôr em prática meus aprendizados com Playwright, uma biblioteca para automação de testes de end-to-end

## Índice

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Uso](#uso)
- [Modo UI](#modo-ui)

## Introdução

Playwright é uma biblioteca de automação de navegador de código aberto da Microsoft. Ele permite que os desenvolvedores escrevam scripts em diversas linguagens para automatizar as ações do navegador, como clicar em botões, preencher formulários e navegar entre páginas.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando no terminal:

```bash
npm install
```

## Uso

Para executar os testes, navegue até o diretório raiz do projeto e use o seguinte comando:
```bash
npx playwright test
```

## Modo UI

Para executar o Playwright no modo UI, use o seguinte comando:

```bash
npx playwright test --ui
```

## Testes

Atualmente, este projeto contém um teste implementado no arquivo [geracao-caldeira.spec.ts](e2e/geracao-caldeira.spec.ts):

### Teste: should load the geracao caldeira page

Este teste verifica se a página 'https://www.geracaocaldeira.org/' é carregada corretamente e se o título da página contém a string 'Geração Caldeira'. 

```ts
test('should load the geracao caldeira page', async ({ page }) => {
    const title = await page.title();
    expect((title)?.match('Geração Caldeira')?.[0]).toBe('Geração Caldeira');
});
