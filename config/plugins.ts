export default ({ env }) => ({
    graphql: {
        enabled: true,
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: false,
            depthLimit: 9,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
            },
        },
    },

    upload: {
        config: {
            provider: 'strapi-provider-cloudflare-r2',
            providerOptions: {
                accessKeyId: env('CF_ACCESS_KEY_ID'),
                secretAccessKey: env('CF_ACCESS_SECRET'),
                /**
                 * https://<ACCOUNT_ID>.r2.cloudflarestorage.com
                 */
                endpoint: env('CF_ENDPOINT'),
                params: {
                    Bucket: env('CF_BUCKET'),
                },
                /**
                 * CDN / Public URL (z. B. https://pub-xxxx.r2.dev oder Custom Domain)
                 * Wird in der DB gespeichert statt des R2-Endpoints
                 */
                cloudflarePublicAccessUrl: env('CF_PUBLIC_ACCESS_URL'),
                /**
                 * Alle Assets im Root ablegen (keine numerischen Strapi-Folder)
                 */
                pool: false,
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
            publicUrl: env('CF_PUBLIC_ACCESS_URL'),
        },
    },
});
