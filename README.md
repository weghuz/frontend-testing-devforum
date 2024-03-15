## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a small example app for the dev-forum held at NetConsult for fronted testing.

## Adding tests

Your asignment will be to add tests to the react component called LoginForm.

To add tests you need to add these packages (We're using Vitest for this code-along)
- pnpm add npm install -D for the following libraries: 
    - vitest (The core testing library) (pnpm vitest)
    - @vitejs/plugin-react (For rendering react with vite)
    - vite-tsconfig-paths (Vite needs this to play nice with next imports)
    - vitest-ui (Cool ui for vite. Run with pnpm vitest --ui (It opens in the browser))
    - jsdom (For rendering the dom, testing-library needs a dom-driver. jsdom is the most complete one)
    - @testing-library/react (For rendering and testing react components in tests)
    - @testing-library/user-event (For testing user agent-like behaviour when testing components)

Your config file should be named `vitest.config.ts` and should contain this config:
```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
        environment: 'jsdom',
        setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
    },
});
```

You should test at least these things:
When defining tests try to use the findByRole from the render function
Also try to use userEvent when testing input fields and clicking buttons.
Remember that tests need to be async and await the user actions.

- Name can not be less than 3 characters long
- Name can not be longer than 20 characters long
- Password can be no less than 8 characters long
- Password can not be any longer than 20 characters long
- Test the the Password Again field can not match the Password field.

### Extra asignment

- Test the hook "usePasswordAgain" and see if it correctly tests if the passwords match
- Test the hook independently of the Component for the form. (To test the hook independently you need to define a custom useForm with provider).