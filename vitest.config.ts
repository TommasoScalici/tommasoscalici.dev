/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
    // @ts-expect-error - vitest types are not effectively merged into AstroUserConfig in this context
    test: {
        environment: 'happy-dom',
    },
});
