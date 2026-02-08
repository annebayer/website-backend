export default ({ env }) => {
    const publicUrl = env('CF_PUBLIC_ACCESS_URL');
    const publicHost = publicUrl ? publicUrl.replace(/^https?:\/\//, '') : null;

    return [
        'strapi::errors',
        'strapi::cors',
        'strapi::query',
        'strapi::body',
        'strapi::favicon',
        'strapi::public',
        {
            name: 'strapi::security',
            config: {
                contentSecurityPolicy: {
                    useDefaults: true,
                    directives: {
                        'connect-src': ["'self'", 'https:'],
                        'img-src': [
                            "'self'",
                            'data:',
                            'blob:',
                            'market-assets.strapi.io',
                            ...(publicHost ? [publicHost] : []),
                            ...(publicUrl ? [publicUrl] : []),
                        ],
                        'media-src': [
                            "'self'",
                            'data:',
                            'blob:',
                            'market-assets.strapi.io',
                            ...(publicHost ? [publicHost] : []),
                            ...(publicUrl ? [publicUrl] : []),
                        ],
                        upgradeInsecureRequests: null,
                    },
                },
            },
        },
    ];
};
