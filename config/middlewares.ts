type EnvFn = (key: string) => string | undefined;

interface SecurityConfig {
    contentSecurityPolicy: {
        useDefaults: boolean;
        directives: Record<string, Array<string> | null>;
    };
}

interface StrapiPlugin {
    name: string;
    config: SecurityConfig;
}

export default ({ env }: { env: EnvFn }): StrapiPlugin[] => [
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "connect-src": ["'self'", "https:"],
                    "img-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "market-assets.strapi.io",
                        env("CF_PUBLIC_ACCESS_URL") ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "") : "",
                    ],
                    "media-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "market-assets.strapi.io",
                        env("CF_PUBLIC_ACCESS_URL") ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "") : "",
                    ],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
];
