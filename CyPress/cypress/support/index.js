Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    return originalFn(url, {
        ...options,
        onBeforeLoad: (win) => {
            // Zablokuj skrypty reklamowe
            Object.defineProperty(win, 'adsbygoogle', {
                value: { push: () => { } },
            });
        },
    });
});